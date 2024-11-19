/**
 * Bento v4.1.6
 * Built on: 2024-11-14T22:21:28
 * Copyright 2024 Thomson Reuters
 * Maintained by Chi Gao, Joe Huang, Aaron Mendez
 */
(function(angular, d3, undefined) {
  'use strict';

  //Define bentoUI App object
  var bentoApp = angular.module('bento.d3', ['bento.services']);
  //Directive
  bentoApp.constant('bentoD3Config', {
    bentoColors: {
      'green': '#85ab44',
      'orange': '#ff8000',
      'red': '#dc0a0a',
      'blue': '#1472c2'
    },
    chartColors: [
      "#98abc5",
      "#8a89a6",
      "#7b6888",
      "#6b486b",
      "#a05d56",
      "#d0743c",
      "#ff8c00"
    ],
    brandColors: [
      "#ffb400",
      "#ff8000",
      "#A0968C",
      "#666666",
      "#77a22d",
      "#397c2b",
      "#0099c4",
      "#005da2",
      "#444444",
      "#621f95",
      "#6e3ab7",
      '#a00000',
      "#dc0a0a",
    ],
    colors: [
      '#dc0a0a',
      '#ff8000',
      '#ffb400',
      '#b2b2b8',
      '#606169',
      '#37383d',
      '#78a22f',
      '#397c2b',
      '#096352',
      '#0aa386',
      '#0083bf',
      '#005a84',
      '#a00000',
      '#dc0a0a',
      '#bf086d',
      '#f4317b',
      '#dd40c6',
      '#991a99',
      '#46166b',
      '#6234a4',
    ],
    brand10: function() {
      return d3.scaleOrdinal().range(this.brandColors);
    },
    chart7: function() {
      return d3.scaleOrdinal().range(this.chartColors);
    },
    category20: function() {
      return d3.scaleOrdinal().range(this.colors);
    },
    getBentoColors: function(color) {
      var bentoColor = color;
      if (this.bentoColors[color]) {
        bentoColor = this.bentoColors[color];
      }
      return bentoColor;
    },
    addVerticalGradientDef: function(svg, gradientName, color1, color2) {
      var gradient = svg.append('svg:defs')
        .append('svg:linearGradient')
        .attr('id', gradientName)
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

      gradient.append('svg:stop')
        .attr('offset', '0%')
        .attr('stop-color', color1)
        .attr('stop-opacity', 1);

      gradient.append('svg:stop')
        .attr('offset', '100%')
        .attr('stop-color', color2)
        .attr('stop-opacity', 1);
    },
    mergeObjects: function(obj1, obj2) {
      for (var p in obj2) {
        try {
          // Property in destination object set; update its value.
          if (obj2[p].constructor === Object) {
            obj1[p] = this.mergeObjects(obj1[p], obj2[p]);
          } else {
            obj1[p] = obj2[p];
          }
        } catch (e) {
          // Property in destination object not set; create it and set its value.
          obj1[p] = obj2[p];
        }
      }
      return obj1;
    }

  })
    .directive('bentoD3VerticalSplitBars', ['bentoD3Config', '$window', '$timeout',
      function(config, $window, $timeout) {
        return {
          restrict: 'EA',
          scope: {
            data: '=',
          },
          link: function(scope, element, attrs) {
            var margin = {
                top: 40,
                right: 20,
                bottom: 80,
                left: 50
              },
              dWidth = attrs.width ? attrs.width : (element[0].offsetWidth ? element[0].offsetWidth : 400),
              dHeight = attrs.height ? attrs.height : (element[0].offsetHeight ? element[0].offsetHeight : 400),
              width = dWidth - margin.left - margin.right,
              height = dHeight - margin.top - margin.bottom,
              barHeight = height * 0.5,
              ticks = attrs.ticks ? attrs.ticks : 3,
              renderTimeout;

            var svg = d3.select(element[0]).append('svg')
              .attr('width', '100%')
              .attr('height', height + margin.top + margin.bottom)
              .append('g')
              .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            //check to see if bar color will be gradient
            //set default bar colors
            var topColor = config.bentoColors.orange;
            var bottomColor = config.bentoColors.green;
            //if attributes are defined
            if (attrs.topColor) {
              topColor = scope.$parent.$eval(attrs.topColor);
            }
            if (attrs.bottomColor) {
              bottomColor = scope.$parent.$eval(attrs.bottomColor);
            }

            scope.$watch('data', function(newData) {
              scope.render(newData);
            }, true);


            if (attrs.autoWidth === 'true') {
              $window.onresize = function() {
                scope.$apply();
              };

              scope.$watch(function() {
                return angular.element($window)[0].innerWidth;
              }, function() {
                svg.selectAll('*').remove();

                if (renderTimeout) {
                  clearTimeout(renderTimeout);
                }

                renderTimeout = $timeout(function() {
                  dWidth = element[0].offsetWidth;
                  width = dWidth - margin.left - margin.right;
                  scope.render(scope.data);

                }, 100);

              });
            }


            scope.render = function(data) {
              var x = d3.scaleOrdinal()
                .rangeRoundBands([0, width], 0.35);
              var xAxis = d3.svg.axis()
                .scale(x)
                //.tickFormat('')
                .orient('bottom');

              var y = d3.scale.linear()
                .range([barHeight, 0]);
              var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left')
                .ticks(ticks, '');

              var yBottom = d3.scale.linear()
                .range([barHeight, height]);
              var yAxisBottom = d3.svg.axis()
                .scale(yBottom)
                .orient('left')
                .ticks(ticks, '');

              //if attribute is array
              //add gradient definition to svg
              if (topColor instanceof Array && topColor.length === 2) {
                config.addVerticalGradientDef(svg, 'topColor', topColor[0], topColor[1]);
              }
              if (bottomColor instanceof Array && bottomColor.length === 2) {
                config.addVerticalGradientDef(svg, 'bottomColor', bottomColor[0], bottomColor[1]);
              }

              //d3.tsv('data.tsv', type, function(error, data) {
              x.domain(data.map(function(d) {
                return d[attrs.category];
              }));

              //find max value of bottom and top for y axis
              var maxTop = d3.max(data, function(d) {
                return d[attrs.topBars];
              });
              var maxBottom = d3.max(data, function(d) {
                return d[attrs.bottomBars];
              });
              var max = maxTop > maxBottom ? maxTop : maxBottom;

              y.domain([0, max]);
              yBottom.domain([0, max]);

              //x-axis
              svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,0)')
                .attr('fill', 'none')
                .attr('stroke', 'none')
                .attr('shape-rendering', 'crispEdges')
                .call(xAxis);
              //y-axis
              svg.append('g')
                .attr('fill', 'none')
                .attr('stroke', '#000')
                .attr('shape-rendering', 'crispEdges')
                .attr('class', 'y axis')
                .call(yAxis);

              svg.append('g')
                .attr('fill', 'none')
                .attr('stroke', '#000')
                .attr('shape-rendering', 'crispEdges')
                .attr('class', 'y axis')
                .call(yAxisBottom);
              // .append('text')
              // .attr('transform', 'rotate(-90)')
              // .attr('y', 6)
              // .attr('dy', '.71em')
              // .style('text-anchor', 'end')
              // .text('Value');
              svg.selectAll('.bar')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar')
                .attr('x', function(d) {
                  return x(d[attrs.category]);
                })
                .attr('width', x.rangeBand())
                .attr('fill', function() {
                  if (topColor instanceof Array) {
                    return 'url(#topColor)';
                  } else {
                    return topColor;
                  }
                })
                .attr('height', 0)
                .attr('y', barHeight)
                .transition()
                .duration(1000)
                .attr('y', function(d) {
                  return y(d[attrs.topBars]);
                })
                .attr('height', function(d) {
                  return barHeight - y(d[attrs.topBars]);
                });



              svg.selectAll('.bar-bottom')
                .data(data)
                .enter().append('rect')
                .attr('class', 'bar-bottom')
                .attr('x', function(d) {
                  return x(d[attrs.category]);
                })
                .attr('width', x.rangeBand())
                .attr('fill', function() {
                  if (bottomColor instanceof Array) {
                    return 'url(#bottomColor)';
                  } else {
                    return bottomColor;
                  }
                })
                .attr('height', 0)
                .attr('y', barHeight)
                .transition()
                .duration(1000)
                .attr('height', function(d) {
                  return yBottom(d[attrs.bottomBars]) - barHeight;
                });


              svg.selectAll('line.horizontal-grid')
                .data(y.ticks(ticks))
                .enter()
                .append('line')
                .attr({
                  'class': 'horizontal-grid',
                  'x1': 0,
                  'x2': width,
                  'y1': function(d) {
                    return y(d);
                  },
                  'y2': function(d) {
                    return y(d);
                  }
                })
                .style({
                  'stroke': '#000',
                  'stroke-opacity': '0.1'
                });

              svg.selectAll('line.bottom-horizontal-grid')
                .data(yBottom.ticks(ticks))
                .enter()
                .append('line')
                .attr({
                  'class': 'bottom-horizontal-grid horizontal-grid',
                  'x1': 0,
                  'x2': width,
                  'y1': function(d) {
                    return yBottom(d);
                  },
                  'y2': function(d) {
                    return yBottom(d);
                  }
                })
                .style({
                  'stroke': '#000',
                  'stroke-opacity': '0.1'
                });

              svg.append('line')
                .attr({
                  'class': 'middle-x-axis',
                  x1: 0,
                  y1: barHeight,
                  x2: width,
                  y2: barHeight,
                  stroke: '#eee',
                  'stroke-width': '3'
                });

              svg.selectAll('.x.axis text') // select all the text elements for the xaxis
              .attr('transform', function() {
                return 'translate(' + (this.getBBox().height) * -1 + ',' + (this.getBBox().height) + ')rotate(-45 0,0)';
              })
                .style('text-anchor', 'end')
                .attr('x', -(barHeight * 1.35))
                .attr('y', barHeight * 1.35);
              // svg.append('g')
              // .attr({
              //     'class':'xaxis-label'
              // })
              // .selectAll('text.label')
              //     .data(data)
              //     .enter()
              //     .append('text')
              //     .text(function(d) {
              //         return d[attrs.category];
              //     })
              //     .attr({
              //         'class': 'label',
              //         'text-anchor': 'end',
              //         'transform':function(d){
              //             var rx = x(d[attrs.category])*-2;
              //             var ry = x(d[attrs.category])*.4
              //             return 'rotate(-45 '+ry+','+rx+')'
              //         },
              //          'y': height*.4,
              //          'x': -height*.4
              //         // 'x': function(d) {
              //         //     return x(d[attrs.category]);
              //         // }
              //     })
              //     .style({
              //         'stroke': '#000',
              //         'stroke-opacity': '0.1'
              //     });

              // svg.selectAll('.tick line')
              // .style({
              //     'stroke-opacity': '0'
              // })

              // svg.selectAll('.domain')
              // .style({
              //     'stroke-opacity': '0'
              // })

            };

            // function type(d) {
            //     d[attrs.topBars] = +d[attrs.topBars];
            //     return d;
            // }
          }
        };
      }
    ])
    .directive('bentoD3ProgressMeter', ['bentoD3Config',
      function(config) {
        return {
          restrict: 'EA',
          scope: {
            data: '='
          },
          link: function(scope, element, attrs) {
            var width = parseInt(attrs.width) || 200,
              height = parseInt(attrs.height) || 10,
              padding = height * 3,
              fontsize = height,
              radius = attrs.radius ? parseInt(attrs.radius) : 0,
              alignment = attrs.alignment ? attrs.alignment : 'right',
              data;

            var svg = d3.select(element[0])
              .append('svg')
              .attr('width', width + padding)
              .attr('height', height);

            var color = attrs.color ? config.getBentoColors(attrs.color) : config.bentoColors.orange;
            var fillColor = attrs.bgColor ? config.getBentoColors(attrs.bgColor) : '#ccc';
            var textColor = attrs.bgColor ? config.getBentoColors(attrs.bgColor) : '#000';

            scope.$watch('data', function(newData) {
              data = newData;
              render();
            }, true);


            attrs.$observe('alignment', function(val) {
              if (val) {
                alignment = val;
                render();
              }
            });

            attrs.$observe('color', function(val) {
              if (val) {
                color = config.getBentoColors(val);
                render();
              }
            });

            function render() {
              if (data === undefined) {
                return;
              }
              svg.selectAll('*').remove();

              var start_val = 0,
                current_val = 0,
                end_val = [parseInt(data)],
                textWidth = 0;

              svg.selectAll('text')
                .data(end_val)
                .enter()
                .append('text')
                .text(start_val)
                .attr('fill', textColor)
                .attr('y', height - 2)
                .attr('x', function() {
                  var pos = width + 3;
                  if (alignment === 'left') {
                    pos = 0;
                  }
                  return pos;
                })
                .style('font-size', fontsize + 'px')
              //.style('font-family', 'KnowledgeLight')
              .attr('text-anchor', alignment)
                .transition()
                .duration(1500)
                .tween('text', function(d) {
                  var i = d3.interpolate(current_val, d);
                  return function(t) {
                    current_val = Math.round(i(t));
                    this.textContent = current_val + '%';
                  };
                });

              var xPos = 0;
              if (alignment === 'left') {
                var myText = svg.select('text')[0][0];
                myText.textContent = '100%';
                textWidth = myText.getBBox().width;
                xPos = textWidth;
              }

              //background
              svg.append('rect')
                .attr('height', height)
                .attr('width', width)
                .attr('rx', radius)
                .attr('ry', radius)
                .attr('x', xPos)
                .attr('y', 0)
                .attr('fill', fillColor);
              //foreground
              svg.append('rect')
                .attr('height', height)
                .attr('width', 0)
                .attr('x', xPos)
                .attr('y', 0)
                .attr('rx', radius)
                .attr('ry', radius)
                .attr('fill', color)
                .transition()
                .duration(1500)
                .attr('width', function() {
                  return data * 0.01 * width;
                });


            };

          }
        };
      }
    ])
    .directive('bentoD3HorizontalBars', ['bentoD3Config', '$window', '$timeout',
      function(config, $window, $timeout) {
        return {
          restrict: 'EA',
          scope: {
            data: '=',
          },
          link: function(scope, element, attrs) {
            var renderTimeout;
            var margin = parseInt(attrs.margin) || 20,
              barHeight = parseInt(attrs.barHeight) || 30,
              barPadding = parseInt(attrs.barPadding) || 5;

            var svg = d3.select(element[0])
              .append('svg')
              .style('width', '100%');

            $window.onresize = function() {
              scope.$apply();
            };

            scope.$watch(function() {
              return angular.element($window)[0].innerWidth;
            }, function() {
              scope.render(scope.data);
            });

            scope.$watch('data', function(newData) {
              scope.render(newData);
            }, true);

            scope.render = function(data) {
              svg.selectAll('*').remove();

              if (!data) {
                return;
              }
              if (renderTimeout) {
                clearTimeout(renderTimeout);
              }

              renderTimeout = $timeout(function() {
                var width = d3.select(element[0]).node().offsetWidth - margin,
                  height = scope.data.length * (barHeight + barPadding),
                  color = config.category20(),
                  xScale = d3.scale.linear()
                  .domain([0, d3.max(data, function(d) {
                    return d.value;
                  })])
                  .range([0, width]);

                svg.attr('height', height);

                svg.selectAll('rect')
                  .data(data)
                  .enter()
                  .append('rect')
                  .on('click', function(d) {
                    return scope.onClick({
                      item: d
                    });
                  })
                  .attr('height', barHeight)
                  .attr('width', 140)
                  .attr('x', Math.round(margin / 2))
                  .attr('y', function(d, i) {
                    return i * (barHeight + barPadding);
                  })
                  .attr('fill', function(d) {
                    return color(d.value);
                  })
                  .on('click', function(d) {
                    return scope.onClick({
                      item: d
                    });
                  })
                  .transition()
                  .duration(1000)
                  .attr('width', function(d) {
                    return xScale(d.value);
                  });
                svg.selectAll('text')
                  .data(data)
                  .enter()
                  .append('text')
                  .attr('fill', '#fff')
                  .attr('y', function(d, i) {
                    return i * (barHeight + barPadding) + 15;
                  })
                  .attr('x', 15)
                  .text(function(d) {
                    return d.name + ' (' + d.value + ')';
                  });
              }, 100);
            };
          }
        };
      }
    ])
    
    .directive('bentoD3LineChart', ['bentoD3Config',
      function(config) {
        return {
          restrict: 'EA',
          scope: {
            data: '=',
            onClick: '&'
          },
          link: function(scope, element, attrs) {
            var width = parseInt(attrs.size) || 150,
              height = parseInt(attrs.size) || 150,
              color = config.category20();

            var arc = d3.svg.arc()
              .innerRadius(30)
              .outerRadius(60);

            var pie = d3.layout.pie()
              .sort(null);

            var svg = d3.select(element[0])
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .append('g')
              .attr('transform',
                'translate(' + width / 2 + ',' + height / 2 + ')');

            scope.$watch('data', function(newData) {
              scope.render(newData);
            }, true);

            scope.render = function(data) {
              svg.selectAll('*').remove();

              svg.selectAll('path')
                .data(pie(data))
                .enter().append('path')
                .attr('fill', function(d, i) {
                  return color(i);
                })
                .attr('d', arc);

            };
          }
        };
      }
    ]);
})(window.angular, d3);

//TODO: abstract redundant code from Bar and Column Chart
//into shared service

(function() {
  'use strict';

  angular.module('bento.d3')
    .factory('bentoChartService', bentoChartService);

  bentoChartService.$inject = ['bentoD3Config', '$window', '$timeout', '$bentoServices'];

  function bentoChartService(config, $window, $timeout, bentoServices) {
    var defaultOptions = {
      chart: {
        marginTop: 20,
        marginRight: 20,
        marginBottom: 40,
        marginLeft: 50,
        width: 300,
        height: 300
      },
      plotOptions: {
        series: {
          groupPadding: .24,
          pointPadding: .2
        }
      }
    };

    return {
      defaultOptions: defaultOptions,
      tooltipID: tooltipID,
      tooltipHTML: tooltipHTML,
      getD3Data: getD3Data,
      flattenObject: flattenObject,
      onMouseMove: onMouseMove,
      onMouseOut: onMouseOut,
      makeRTL: makeRTL
    };

    function tooltipID() {
      return "d3-tooltip-" + Math.round(Math.random() * 1000000);
    }

    function tooltipHTML(tooltipID) {
      return '<div id="' + tooltipID + '" class="bento-d3-tooltip top tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>';
    }

    function getD3Data(rawData, categoryAxis) {
      var data = [];
      rawData.series.forEach(function(d, i) {
        data[i] = {};
        data[i].name = d.name;
        var x0 = 0;
        var y0 = 0;

        data[i].barData = d.data.map(function(val, j) {
          var barDataObj = {}
            //if data is array of object
          barDataObj.groupName = d.name;
          if (typeof val === 'object') {
            barDataObj.name = val.name;
            barDataObj.color = val.color;
            if (categoryAxis === 'y') {
              barDataObj.value = +val.x;
              barDataObj.x0 = x0;
              barDataObj.x1 = x0 += +val.x;
            } else if (categoryAxis === 'x') {
              barDataObj.value = +val.y;
              barDataObj.y0 = y0;
              barDataObj.y1 = y0 += +val.y;
            }
          } else if (rawData.yAxis &&
            rawData.yAxis.categories) {
            barDataObj.name = rawData.yAxis.categories[j];
            barDataObj.value = +val;
            barDataObj.x0 = x0;
            barDataObj.x1 = x0 += +val;
          } else if (rawData.xAxis &&
            rawData.xAxis.categories) {
            barDataObj.name = rawData.xAxis.categories[j];
            barDataObj.value = +val;
            barDataObj.y0 = y0;
            barDataObj.y1 = y0 += +val;
          }
          return barDataObj;
        });

        //stacked total
        if (categoryAxis === 'y') {
          data[i].total = data[i].barData[data[i].barData.length - 1].x1;
        } else if (categoryAxis === 'x') {
          data[i].total = data[i].barData[data[i].barData.length - 1].y1;
        }
      });
      return data;
    }

    function flattenObject(obj) {
      var toReturn = {};
      var flatObject;
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {
          continue;
        }
        if ((typeof obj[i]) === 'object') {
          flatObject = flattenObject(obj[i]);
          for (var x in flatObject) {
            if (!flatObject.hasOwnProperty(x)) {
              continue;
            }
            toReturn[i + (!!isNaN(x) ? '.' + x : '')] = flatObject[x];
          }
        } else {
          toReturn[i] = obj[i];
        }
      }
      return toReturn;
    };

    function onMouseMove(d, barElement, element, tooltipID, tooltipFormatter) {
      var mousePos = d3.mouse(element);
      var ox = mousePos[0] - barElement.clientLeft;
      var oy = mousePos[1] - barElement.clientTop;
      var barTip = d3.select('#' + tooltipID);
      barTip.select('.tooltip-inner')
        .text(tooltipFormatter ? tooltipFormatter(d) : d.name + ': ' + d.value);
      barTip
        .attr('class', 'bento-d3-tooltip top tooltip in')
        .style("left", (ox - barTip.node().getBoundingClientRect().width / 2) + "px")
        .style("top", (oy - barTip.node().getBoundingClientRect().height - 5) + "px")
        .style("display", "block");
    }

    function onMouseOut(tooltipID) {
      d3.select('#' + tooltipID)
        .style('display', 'none');
    }

    function makeRTL(element, svg, flatOptions, currentOptions, xAxisTitle, yAxisTitle, yAxisText, legend, maxXAxisLabelHeight, maxYAxisLabelWidth) {

      svg.attr('transform', 'translate(' + (element[0].getBoundingClientRect().width - currentOptions.chart.marginLeft) + ',' + currentOptions.chart.marginTop + ') scale(-1,1)');

      var xAxisText = svg.selectAll('.x.axis text');
      var isIE = bentoServices.getBrowser().browser ==='ie';
      var anchorDirection = isIE ? 'start':'end';
      var xAxisPad = isIE ? 0.2 : 0.3;
      var titlePadRatio = isIE ? 0.75 : 1;

      if (flatOptions['xAxis.labels.rotation']) {
        xAxisText
        // select all the text elements for the xaxis
          .attr('transform', function() {
            return 'translate(' + (this.getBBox().height * -xAxisPad) + ',' + (this.getBBox().height * xAxisPad) + ')rotate(' + flatOptions['xAxis.labels.rotation'] + ' 0,0) scale(-1,1)';
          })
          .style('text-anchor', anchorDirection)
          .attr('x', 0)
          .attr('y', 0);
      } else {
        xAxisText
          .attr('transform', 'scale(-1,1)')
      }

      if (xAxisTitle) {
        xAxisTitle
          .attr("transform", "scale(-1,1)")
          .attr("x", -currentOptions.chart.width / 2)
          .style("text-anchor","middle")
          .attr("dy", maxXAxisLabelHeight * titlePadRatio);
      }
      
      if (yAxisTitle) {
        yAxisTitle
          .attr("transform", "rotate(-90) scale(-1,1)")
          .attr("x", currentOptions.chart.height / 2)
          .attr("dy", maxYAxisLabelWidth * titlePadRatio);
      }
      if (yAxisText) {
        yAxisText
          .attr("transform", "scale(-1,1)")
          .attr("text-anchor", anchorDirection)
          .attr("x", "9")
      }
      if (legend) {
        legend.select("text")
          .attr("x", -(currentOptions.chart.width - 21 + currentOptions.chart.marginRight))
          .attr("transform", "scale(-1,1)")
          .style("text-anchor", anchorDirection);
      }
    }
  }
})();
//TODO: abstract redundant code from Bar and Column Chart
//into shared service

(function() {
  'use strict';

  angular.module('bento.d3')
    .directive('bentoD3BarChart', bentoD3BarChart);

  bentoD3BarChart.$inject = ['bentoD3Config', '$window', '$timeout', '$bentoServices', 'bentoChartService'];

  function bentoD3BarChart(config, $window, $timeout, bentoServices, bentoChartService) {
    return {
      restrict: 'EA',
      scope: {
        data: '=', //chart data
      },
      link: link
    };

    function link(scope, element, attrs) {
      var defaultOptions = angular.copy(bentoChartService.defaultOptions);

      var svg,
        renderTimeout,
        dataCopy = angular.copy(scope.data),
        currentOptions = angular.merge(defaultOptions, dataCopy);
      var color = config.brand10();

      //Watchers and Listeners
      scope.$watch('data', onDataChanged, true);
      scope.$on('$destroy', onDestroy);
      element.on('$destroy', onDestroy);
      angular.element($window).on('resize', onWindowResize);
      scope.$watch(function() {
        return element[0].offsetWidth;
      }, resizeAndRenderChart);

      var tooltipID = bentoChartService.tooltipID();
      var tooltipHTML = bentoChartService.tooltipHTML(tooltipID)

      element.append(tooltipHTML);

      function render() {
        if (!scope.data) {
          return;
        }
        var categories = (scope.data.yAxis && scope.data.yAxis.categories) ||
          scope.data.series[0].data.map(function(e) {
            return e.name;
          });
        //map data to D3 friendly format
        var data = bentoChartService.getD3Data(scope.data, 'y');

        d3.select(element[0]).select('svg').remove();

        svg = d3.select(element[0])
          .append('svg')
          .attr('width', '100%')
          .attr('height', currentOptions.chart.height + currentOptions.chart.marginTop + currentOptions.chart.marginBottom)
          .append('g');

        //Setup and Append X Axis
        var x = d3.scaleLinear();

        //get max value from data
        var maxValue = d3.max(scope.data.series, function(obj) {
          //check if data is array of object or values, if object
          if (typeof obj.data[0] === 'object') {
            return d3.max(obj.data, function(e) {
              return e.x;
            });
          } else {
            return d3.max(obj.data);
          }
        });
        //get min value from data
        var minValue = d3.min(scope.data.series, function(obj) {
          if (typeof obj.data[0] === 'object') {
            return d3.min(obj.data, function(e) {
              return e.x;
            });
          } else {
            return d3.min(obj.data);
          }
        });

        //include 0 in y axis and give some vertical padding
        minValue = minValue > 0 ? 0 : minValue + minValue * .1;
        maxValue = maxValue < 0 ? 0 : maxValue + maxValue * .1;

        var flatOptions = bentoChartService.flattenObject(currentOptions);

        if (flatOptions['colors']) {
          color = d3.scaleOrdinal().range(currentOptions.colors);
        }
        //calculate the x-axis domain
        if (flatOptions['plotOptions.series.stacking'] ||
          flatOptions['plotOptions.bar.stacking']) {
          minValue = 0;
          maxValue = d3.max(data, function(d) {
            return d.total;
          });
          x.domain([maxValue, minValue])
            .nice()
            .range([currentOptions.chart.width, 0]);

        } else {
          x.domain([maxValue, minValue])
            .nice()
            .range([currentOptions.chart.width, 0]);
        }

        var xAxis = d3.axisBottom(x);
        //check for custom xAxis label formatter
        if (flatOptions['xAxis.labels.formatter']) {
          xAxis.tickFormat(flatOptions['xAxis.labels.formatter']);
        }

        var xAxisContainer = svg.append('g')
          .attr('shape-rendering', 'crispEdges')
          .attr('transform', 'translate(0,' + currentOptions.chart.height + ')')
          .attr('class', 'x axis')
          .call(xAxis);
        //calc max x-axis Label Height
        var maxXAxisLabelHeight = 0;
        var xAxisText = xAxisContainer.selectAll("text");
        if (flatOptions['xAxis.labels.style.fontSize']) {
          xAxisText
            .attr('font-size', flatOptions['xAxis.labels.style.fontSize']);
        }
        if (flatOptions['xAxis.labels.rotation']) {
          svg.selectAll('.x.axis text') // select all the text elements for the xaxis
            .attr('transform', function() {
              return 'translate(' + (this.getBBox().height * -0.5) + ',' + (this.getBBox().height * 0.5) + ')rotate(' + flatOptions['xAxis.labels.rotation'] + ' 0,0)';
            })
            .style('text-anchor', 'end')
            .attr('x', 0)
            .attr('y', 0);
        }
        xAxisText.each(function() {
          if (this.getBBox().height > maxXAxisLabelHeight) {
            maxXAxisLabelHeight = this.getBoundingClientRect().height;
          }
        });
        //check for x-axis title
        if (flatOptions['xAxis.title.text']) {
          var xAxisTitle = xAxisContainer
            .append("text")
            .attr("x", currentOptions.chart.width / 2)
            .style("text-anchor", "middle")
            .text(flatOptions['xAxis.title.text']);
          maxXAxisLabelHeight = maxXAxisLabelHeight + xAxisTitle.node().getBoundingClientRect().height + 10;
          xAxisTitle.attr("dy", maxXAxisLabelHeight);
        }

        svg.attr('transform', 'translate(' + (currentOptions.chart.marginLeft) + ',' + currentOptions.chart.marginTop + ')');

        //create group margin, if there are grouped columns, provide more margin
        //if there is only one set of columns, have smaller margins 
        var colGroupMargin = data.length > 1 ? flatOptions['plotOptions.series.groupPadding'] : 0;
        var colMargin = flatOptions['plotOptions.series.pointPadding'];

        //Set up and Append Y Axis
        var y0 = d3.scaleBand()
          .range([0, currentOptions.chart.height])
          .padding(colGroupMargin)
          .round(true);

        var y1 = d3.scaleBand();

        var yAxis = d3.axisLeft(y0);
        if (flatOptions['yAxis.labels.formatter']) {
          yAxis.tickFormat(flatOptions['yAxis.labels.formatter']);
        }
        //if grouped or stacked, use names, 
        //else use categories for y-axis labels
        if (data.length > 1) {
          yAxis.scale(y0)
        } else {
          yAxis.scale(y1)
        }
        //set up y-axis domain
        y0.domain(data.map(function(d) {
          return d.name;
        }));

        y1.domain(categories)
          .range([0, y0.bandwidth()])
          .padding(colMargin)
          .round(true);


        //y lines
        svg.selectAll('line.vertical-grid')
          .data(x.ticks())
          .enter()
          .append('line')
          .attr('class', 'vertical-grid')
          .attr('y1', 0)
          .attr('y2', currentOptions.chart.height)
          .attr('x1', function(d) {
            return x(d);
          })
          .attr('x2', function(d) {
            return x(d);
          })
          .style('stroke', '#000')
          .style('stroke-opacity', '0.1');

        //Append columns  
        var col = svg.selectAll(".col")
          .data(data)
          .enter().append('g')
          .attr('class', '.col')
          .attr('transform', function(d) {
            return "translate(0," + y0(d.name) + ")";
          });

        var tooltipFormatter = flatOptions['tooltip.formatter'];
        var columnBars = col.selectAll('.bar')
          .data(function(d) {
            return d.barData
          })
          .enter().append('rect')
          .on('mouseover', function(d) {
            bentoChartService.onMouseMove(d, this, element[0], tooltipID, tooltipFormatter);
          })
          .on('mousemove', function(d) {
            bentoChartService.onMouseMove(d, this, element[0], tooltipID, tooltipFormatter);
          })
          .on('mouseout', function() {
            bentoChartService.onMouseOut(tooltipID);
          })
          .attr('class', 'bar');

        // if stacking option on
        if (flatOptions['plotOptions.series.stacking'] ||
          flatOptions['plotOptions.bar.stacking']) {
          yAxis.scale(y0);
          columnBars
            .attr('height', y0.bandwidth())
            .attr('fill', returnColor)
            .attr('width', 0)
            .attr('x', function(d) {
              return x(0);
            })
            .transition()
            .duration(1000)
            .attr('width', function(d) {
              return (x(d.x1) - x(d.x0));
            })
            .attr('x', function(d) {
              return x(d.x0);
            });
        } else {
          columnBars
            .attr('y', function(d) {
              return y1(d.name);
            })
            .attr('height', y1.bandwidth())
            .attr('fill', returnColor)
            .attr('width', 0)
            .attr('x', function(d) {
              return x(0);
            })
            .transition()
            .duration(1000)
            .attr('x', function(d) {
              if (d.value > 0) {
                return x(0);
              } else {
                return x(d.value);
              }
            })
            .attr('width', function(d) {
              return Math.abs(x(d.value) - x(0));
            });
        }

        //Append y-axis over bars
        var yAxisContainer = svg.append('g')
          .attr('class', 'y axis')
          .attr('shape-rendering', 'crispEdges')
          .call(yAxis);


        if (flatOptions['yAxis.labels.style.fontSize']) {
          svg.selectAll('.y.axis text')
            .attr('font-size', flatOptions['yAxis.labels.style.fontSize']);
        }
        //calc max y-axis Label Width
        var maxYAxisLabelWidth = 0;
        var yAxisText = yAxisContainer.selectAll("text");
        if (flatOptions['yAxis.labels.style.fontSize']) {
          yAxisText
            .attr('font-size', flatOptions['yAxis.labels.style.fontSize']);
        }

        yAxisText.each(function() {
          if (this.getBBox().width > maxYAxisLabelWidth) {
            maxYAxisLabelWidth = this.getBBox().width;
          }
        });
        //check for y-axis title
        if (flatOptions['yAxis.title.text']) {
          var yAxisTitle = yAxisContainer
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -currentOptions.chart.height / 2)
            .style("text-anchor", "middle")
            .text(flatOptions['yAxis.title.text']);
          maxYAxisLabelWidth = -maxYAxisLabelWidth - yAxisTitle.node().getBBox().height - 2;
          yAxisTitle.attr("dy", maxYAxisLabelWidth);
        }

        //show center divider xAxis if needed
        if (minValue != 0) {
          svg.append('g')
            .append('line')
            .attr('class', 'y axis')
            .attr("x1", x(0))
            .attr("x2", x(0))
            .attr("y2", currentOptions.chart.height);
        }

        // if grouped columns, show legend
        if (flatOptions['legend.enabled'] != false && (data.length > 1 ||
            (flatOptions['plotOptions.series.stacking'] ||
              flatOptions['plotOptions.bar.stacking']))) {
          var legend;

          legend = svg.selectAll(".legend")
            .data(categories.slice())
            .enter()
            .append("g")
            .attr("class", "legend")
            .attr("transform", function(d, i) {
              return "translate(0," + i * 19 + ")";
            });

          legend.append("rect")
            .attr("x", currentOptions.chart.width - 15 + currentOptions.chart.marginRight)
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", color);

          legend.append("text")
            .attr("x", currentOptions.chart.width - 21 + currentOptions.chart.marginRight)
            .attr("y", 9)
            .attr("dy", ".15em")
            .style("text-anchor", "end")
            .text(function(d) {
              return d;
            });
        }

        //If is RTL, reverse all
        if (bentoServices.isRTL() === true) {
          bentoChartService.makeRTL(element, svg, flatOptions, currentOptions, xAxisTitle, yAxisTitle, yAxisText, legend, maxXAxisLabelHeight, maxYAxisLabelWidth)
        }
      }


      function returnColor(d) {
        if (d.color) {
          return d.color;
        } else {
          return color(d.name);
        }
      }

      function onDataChanged(data, oldData) {
        if (data && data.series) {
          resizeAndRenderChart();
        }
      }

      function onWindowResize() {
        scope.$apply();
      }

      function resizeAndRenderChart(width) {
        if (renderTimeout) {
          $timeout.cancel(renderTimeout);
        }
        renderTimeout = $timeout(function() {
          currentOptions.chart.width = element[0].offsetWidth - currentOptions.chart.marginLeft - currentOptions.chart.marginRight;
          if (currentOptions.chart.width < 0) {
            currentOptions.chart.width = 0;
          }
          render();
        }, 500);
      }

      function onDestroy() {
        angular.element($window).off('resize', onWindowResize);
        d3.select(element[0]).select('svg').remove();
      }
    }
  }
})();
(function() {
  'use strict';
  angular.module('bento.d3')
    .directive('bentoD3PieChart', ['bentoD3Config', '$bentoServices',
      function(config, bentoServices) {
        return {
          restrict: 'EA',
          scope: {
            data: '=',
            index: '=',
            responsive: '@',
            onClick: '&',
            onHover: '&',
            onLeave: '&',
          },
          link: function(scope, element, attrs) {
            var diameter = attrs.diameter ? parseInt(attrs.diameter) : 120,
              padding = attrs.padding ? parseInt(attrs.padding) : 0,
              width = diameter + padding,
              height = diameter + padding,
              radius = diameter / 2,
              color = config.brand10(),
              innerRadius = attrs.innerRadius ? attrs.innerRadius : 0,
              duration = 250,
              labelr = radius + 20;

            if (attrs.responsive) {
              element[0].className += ' is-responsive';
            }

            var arc = d3.arc()
              .outerRadius(radius)
              .innerRadius(innerRadius);

            var pie = d3.pie()
              .sort(null);

            var svg = d3.select(element[0])
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .attr('preserveAspectRatio', 'xMidYMid')
              .attr('viewBox', '0 0 ' + height + ' ' + width)
              .append('g')
              .attr('transform',
                'translate(' + width / 2 + ',' + height / 2 + ')');

            scope.$watchCollection('data', function(newData) {
              scope.render(newData);
            });

            //Destroy event
            scope.$on('$destroy', onDestroy);
            element.on('$destroy', onDestroy);

            scope.$watch('index', function(newIndex) {
              selectPieSlice(newIndex);
            });


            function selectPieSlice(index) {
              if (index === undefined) {
                return;
              }
              var data;
              svg.selectAll('.arc')
                .each(function(d, i) {
                  if (i === index) {
                    data = d;
                    d3.select(this)
                      .classed('is-faded', false)
                      .classed('is-selected', true);
                  } else if (index === -1) {
                    resetPie();
                  } else {
                    d3.select(this)
                      .classed('is-faded', true)
                      .classed('is-selected', false);
                  }
                });
              scope.onHover({
                item: data,
                index: index
              });
              scope.onClick({
                item: data,
                index: index
              });

            }

            function resetPie() {
              svg.selectAll('.arc')
                .classed('is-faded', false)
                .classed('is-selected', false);

              scope.onClick({
                item: {},
                index: -1
              });

            }

            scope.render = function(data) {
              var total = d3.sum(data, function(d) {
                return d.value;
              });

              svg.selectAll('*').remove();

              var pieData = [];
              data.forEach(function(d) {
                pieData.push(d.value);
              });

              var g = svg.selectAll('.arc')
                .data(pie(pieData))
                .enter().append('g')
                .attr('class', 'arc');


              if (attrs.onClick) {
                g.on('click', function(d, i) {
                  var self = this;
                  var index = i;
                  scope.$apply(function() {
                    if (d3.select(self).classed('is-selected')) {
                      resetPie();
                    } else {
                      selectPieSlice(index);
                    }
                  });
                });
              }

              if (attrs.onHover) {
                g.on('mouseover', function(d, i) {
                  var index = i;
                  scope.$apply(function() {
                    selectPieSlice(index);
                  });
                });
              }

              if (attrs.onLeave) {
                svg.on('mouseleave', function() {
                  scope.$apply(function() {

                    svg.selectAll('.arc')
                      .classed('is-faded', false)
                      .classed('is-selected', false);

                    scope.onLeave();
                  });

                });
              }


              g.append('path')
                .style('fill', function(d, i) {
                  //set color
                  var fillColor = data[i].color || color(i);
                  data[i].color = fillColor;
                  //set percentage here too
                  data[i].percent = Math.round(d.value / total * 100, 1);
                  return fillColor;
                })
                .attr('d', arc);

              if (attrs.labelOutside) {
                g.append('text')
                  .attr('transform', function(d) {
                    var c = arc.centroid(d),
                      x = c[0],
                      y = c[1],
                      h = Math.sqrt(x * x + y * y);
                    return 'translate(' + (x / h * labelr) + ',' +
                      (y / h * labelr) + ')';
                  })
                  .attr('class', function(d) {
                    var anchorRight = 'end';
                    var anchorLeft = 'start';
                    if(bentoServices.isRTL() === true && bentoServices.getBrowser().browser ==='ie'){
                      anchorRight = 'start';
                      anchorLeft = 'end';
                    }
                    return (d.endAngle + d.startAngle) / 2 > Math.PI ? 'label-outside ' + anchorRight : 'label-outside ' + anchorLeft;
                  })
                  .text(function(d, i) {
                    return data[i].label;
                  });
              } else {
                g.append('text')
                  .attr('transform', function(d) {
                    return 'translate(' + arc.centroid(d) + ')';
                  })
                  .style('text-anchor', 'middle')
                  .text(function(d, i) {
                    return data[i].label;
                  });
              }

            };

            function onDestroy() {
              var g = svg.selectAll('.arc');
              if (attrs.onClick) {
                g.on('click', null);
              }
              if (attrs.onHover) {
                g.on('mouseover', null);
              }
              if (attrs.onLeave) {
                svg.on('mouseleave', null);
              }
            }
          }
        };
      }
    ])
})();
(function() {
  'use strict';
  angular.module('bento.d3')
    .directive('bentoD3PercentArc', ['bentoD3Config',
      function(config) {
        return {
          restrict: 'EA',
          scope: {
            data: '=',
            onClick: '&'
          },
          link: function(scope, element, attrs) {
            var lastAngle = 0;
            var arcDuration = 800;
            var lastVal = 0;
            var width = parseInt(attrs.size) || 80,
              height = parseInt(attrs.size) || 80,
              pi = 2 * Math.PI,
              arc = d3.arc()
              .innerRadius(0.9 * width * 0.5)
              .outerRadius(width * 0.5)
              .startAngle(0),
              fontsize = 28 * width / 100;

            var svg = d3.select(element[0])
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .append('g')
              .attr('transform',
                'translate(' + width / 2 + ',' + height / 2 + ')');

            var color = attrs.color ? config.getBentoColors(attrs.color) : config.bentoColors.orange;
            var fillColor = attrs.bgColor ? config.getBentoColors(attrs.bgColor) : '#ddd';

            scope.$watch('data', function(newData) {
              if (typeof newData === "object") {
                var percent = newData.percent || newData.value / newData.total * 100;
                scope.render(percent, newData.value, newData.label)
              } else {
                scope.render(newData);
              }
            }, true);

            function arcTween(transition, angle) {
              transition.attrTween('d', function(d) {
                var interpolate = d3.interpolate(d.endAngle, angle);
                return function(t) {
                  d.endAngle = interpolate(t);
                  return arc(d);
                };
              });
            }

            scope.render = function(data, displayValue, subLabel) {
              if (data === undefined) {
                return;
              }
              svg.selectAll('*').remove();
              //background
              svg.append('path')
                .datum({
                  endAngle: pi
                })
                .style('fill', fillColor)
                .attr('d', arc);
              //foreground
              svg.append('path')
                .datum({
                  endAngle: lastAngle
                })
                .style('fill', color)
                .attr('d', arc)
                .transition()
                .duration(arcDuration)
                .call(arcTween, parseInt(data) * 0.01 * pi);


              var start_val = lastVal;
              var current_val = lastVal;
              var end_val = [parseInt(data)];

              svg.selectAll('.number-label')
                .data(end_val)
                .enter()
                .append('text')
                .text(start_val)
                .attr('class', 'number-label')
                .attr('fill', color)
                .attr('y', fontsize * 0.3)
                .attr('x', 0)
                .style('font-size', fontsize + 'px')
                //.style('font-family', 'KnowledgeLight')
                .attr('text-anchor', 'middle')
                .transition()
                .duration(arcDuration)
                .tween('text', function(d) {
                  var i = d3.interpolate(current_val, d);
                  var _textEl = this;
                  return function(t) {
                    if (displayValue) {
                      current_val = Math.round(displayValue * t);
                    } else {
                      current_val = Math.round(i(t)) + '%';
                    }
                    _textEl.textContent = current_val;
                  };
                });

              if (subLabel) {
                svg.selectAll('.number-label')
                  .attr('y', fontsize * 0.1);

                svg.append('text')
                  .attr('y', fontsize * 0.7)
                  .attr('x', 0)
                  .attr('fill', color)
                  .style('font-size', fontsize * 0.5 + 'px')
                  .attr('text-anchor', 'middle')
                  .attr('class', 'sub-label')
                  .text(subLabel);

              }
              lastVal = parseInt(data);
              lastAngle = parseInt(data) * 0.01 * pi;
            };
            scope.render();
          }
        };
      }
    ])
})();
//TODO: abstract redundant code from Bar and Column Chart
//into shared service
//
(function() {
  'use strict';

  angular.module('bento.d3')
    .directive('bentoD3ColumnChart', bentoD3ColumnChart);

  bentoD3ColumnChart.$inject = ['bentoD3Config', '$window', '$timeout', '$bentoServices', 'bentoChartService'];

  function bentoD3ColumnChart(config, $window, $timeout, bentoServices, bentoChartService) {
    return {
      restrict: 'EA',
      scope: {
        data: '=', //chart data
      },
      link: link
    };

    function link(scope, element, attrs) {
      var defaultOptions = angular.copy(bentoChartService.defaultOptions);
      var svg,
        renderTimeout,
        dataCopy = angular.copy(scope.data),
        currentOptions = angular.merge(defaultOptions, dataCopy);
      var color = config.brand10();

      //Watchers and Listeners
      scope.$watch('data', onDataChanged, true);
      scope.$on('$destroy', onDestroy);
      element.on('$destroy', onDestroy);
      angular.element($window).on('resize', onWindowResize);
      scope.$watch(function() {
        return element[0].offsetWidth;
      }, resizeAndRenderChart);

      var tooltipID = bentoChartService.tooltipID();
      var tooltipHTML = bentoChartService.tooltipHTML(tooltipID)
      element.append(tooltipHTML);

      function render() {
        if(!scope.data){
          return;
        }
        var categories = (scope.data.xAxis && scope.data.xAxis.categories) ||
          scope.data.series[0].data.map(function(e) {
            return e.name;
          });
        //map data to D3 friendly format
        var data = bentoChartService.getD3Data(scope.data, 'x');

        d3.select(element[0]).select('svg').remove();

        svg = d3.select(element[0])
          .append('svg')
          .attr('width', '100%')
          .attr('height', currentOptions.chart.height + currentOptions.chart.marginTop + currentOptions.chart.marginBottom)
          .append('g');

        //Setup and Append Y Axis
        var y = d3.scaleLinear();

        //get max value from data
        var maxValue = d3.max(scope.data.series, function(obj) {
          //check if data is array of object or values, if object
          if (typeof obj.data[0] === 'object') {
            return d3.max(obj.data, function(e) {
              return e.y;
            });
          } else {
            return d3.max(obj.data);
          }
        });
        //get min value from data
        var minValue = d3.min(scope.data.series, function(obj) {
          if (typeof obj.data[0] === 'object') {
            return d3.min(obj.data, function(e) {
              return e.y;
            });
          } else {
            return d3.min(obj.data);
          }
        });

        //include 0 in y axis and give some vertical padding
        minValue = minValue > 0 ? 0 : minValue + minValue * .1;
        maxValue = maxValue < 0 ? 0 : maxValue + maxValue * .1;

        var flatOptions = bentoChartService.flattenObject(currentOptions);
        if(flatOptions['colors']){
          color = d3.scaleOrdinal().range(currentOptions.colors);
        }
        var xAxis = d3.axisBottom();

        //calculate the y-axis domain
        if (flatOptions['plotOptions.series.stacking'] ||
          flatOptions['plotOptions.column.stacking']) {
          xAxis.scale(x0);

          minValue = 0;
          maxValue = d3.max(data, function(d) {
            return d.total;
          });
          y.domain([minValue, maxValue])
            .nice()
            .range([currentOptions.chart.height, 0]);

        } else {
          y.domain([minValue, maxValue])
            .nice()
            .range([currentOptions.chart.height, 0]);
        }

        var yAxis = d3.axisLeft(y);
        //check for custom yAxis label formatter
        if (flatOptions['yAxis.labels.formatter']) {
          yAxis.tickFormat(flatOptions['yAxis.labels.formatter']);
        }
        //check for custom number of yAxis tick marks
        if (flatOptions['yAxis.ticks.count']) {
          yAxis.ticks(flatOptions['yAxis.ticks.count']);
        }

        var yAxisContainer = svg.append('g')
          .attr('shape-rendering', 'crispEdges')
          .attr('class', 'y axis')
          .call(yAxis);
        //calc max y-axis Label Width
        var maxYAxisLabelWidth = 0;
        var yAxisText = yAxisContainer.selectAll("text");
        if (flatOptions['yAxis.labels.style.fontSize']) {
          yAxisText
            .attr('font-size', flatOptions['yAxis.labels.style.fontSize']);
        }

        yAxisText.each(function() {
          if (this.getBBox().width > maxYAxisLabelWidth) {
            maxYAxisLabelWidth = this.getBBox().width;
          }
        });
        //check for y-axis title
        if (flatOptions['yAxis.title.text']) {
          var yAxisTitle = yAxisContainer
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -currentOptions.chart.height / 2)
            .style("text-anchor", "middle")
            .text(flatOptions['yAxis.title.text']);
          maxYAxisLabelWidth = -maxYAxisLabelWidth - yAxisTitle.node().getBBox().height - 2;
          yAxisTitle.attr("dy", maxYAxisLabelWidth);
        }

        svg.attr('transform', 'translate(' + (currentOptions.chart.marginLeft) + ',' + currentOptions.chart.marginTop + ')');

        //create group margin, if there are grouped columns, provide more margin
        //if there is only one set of columns, have smaller margins 
        var colGroupMargin = data.length > 1 ? flatOptions['plotOptions.series.groupPadding'] : 0;
        var colMargin = flatOptions['plotOptions.series.pointPadding'];


        //Set up and Append X Axis
        var x0 = d3.scaleBand()
          .range([0, currentOptions.chart.width])
          .padding(colGroupMargin)
          .round(true);


        var x1 = d3.scaleBand();

        if (flatOptions['xAxis.labels.formatter']) {
          xAxis.tickFormat(flatOptions['xAxis.labels.formatter']);
        }
        //if grouped or stacked, use names, 
        //else use categories for x-axis labels
        if (data.length > 1) {
          xAxis.scale(x0)
        } else {
          xAxis.scale(x1)
        }
        //set up x-axis domain
        x0.domain(data.map(function(d) {
          return d.name;
        }));
        x1.domain(categories)
          .range([0, x0.bandwidth()])
          .padding(colMargin)
          .round(true);




        //x lines
        svg.selectAll('line.horizontal-grid')
          .data(y.ticks())
          .enter()
          .append('line')
          .attr('class','horizontal-grid')
          .attr('x1', 0)
          .attr('x2', currentOptions.chart.width)
          .attr('y1',function(d) {
              return y(d);
          })
          .attr('y2', function(d) {
              return y(d);
          })
          .style('stroke', '#000')
          .style('stroke-opacity','0.1');

        //Append columns  
        var col = svg.selectAll(".col")
          .data(data)
          .enter().append('g')
          .attr('class', '.col')
          .attr('transform', function(d) {
            return "translate(" + x0(d.name) + ",0)";
          });
        var tooltipFormatter = flatOptions['tooltip.formatter'];
        var columnBars = col.selectAll('.bar')
          .data(function(d) {
            return d.barData
          })
          .enter().append('rect')
          .on('mouseover', function(d) {
            bentoChartService.onMouseMove(d, this, element[0], tooltipID, tooltipFormatter);
          })
          .on('mousemove', function(d) {
            bentoChartService.onMouseMove(d, this, element[0], tooltipID, tooltipFormatter);
          })
          .on('mouseout', function() {
            bentoChartService.onMouseOut(tooltipID);
          })
          .attr('class', 'bar');

        // if stacking option on
        if (flatOptions['plotOptions.series.stacking'] ||
          flatOptions['plotOptions.column.stacking']) {
          columnBars
            .attr('width', x0.bandwidth())
            .attr('fill', returnColor)
            .attr('height', 0)
            .attr('y', function(d) {
              return y(0);
            })
            .transition()
            .duration(1000)
            .attr('height', function(d) {
              return (y(d.y0) - y(d.y1));
            })
            .attr('y', function(d) {
              return y(d.y1);
            });
        } else {
          columnBars
            .attr('x', function(d) {
              return x1(d.name);
            })
            .attr('width', x1.bandwidth())
            .attr('fill', returnColor)
            .attr('height', 0)
            .attr('y', function(d) {
              return y(0);
            })
            .transition()
            .duration(1000)
            .attr('y', function(d) {
              if (d.value < 0) {
                return y(0);
              } else {
                return y(d.value);
              }
            })
            .attr('height', function(d) {
              return Math.abs(y(d.value) - y(0));
            });
        }

        //show center divider xAxis if needed
        if (minValue != 0) {
          svg.append('g')
            .append('line')
            .attr('class', 'x axis')
            .attr("y1", y(0))
            .attr("y2", y(0))
            .attr("x2", currentOptions.chart.width);
        }

        //Append x-axis after columns
        var xAxisContainer = svg.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + currentOptions.chart.height + ')')
          .attr('shape-rendering', 'crispEdges')
          .call(xAxis);

        if (flatOptions['xAxis.labels.rotation']) {
          svg.selectAll('.x.axis text') // select all the text elements for the xaxis
          .attr('transform', function() {
            return 'translate(' + (this.getBBox().height * -0.5) + ',' + (this.getBBox().height * 0.5) + ')rotate(' + flatOptions['xAxis.labels.rotation'] + ' 0,0)';
          })
            .style('text-anchor', 'end')
            .attr('x', 0)
            .attr('y', 0);
        }

        if (flatOptions['xAxis.labels.style.fontSize']) {
          svg.selectAll('.x.axis text')
            .attr('font-size', flatOptions['xAxis.labels.style.fontSize']);
        }

        //calc max x-axis Label Height
        var maxXAxisLabelHeight = 0;
        var xAxisText = xAxisContainer.selectAll("text");
        if (flatOptions['xAxis.labels.style.fontSize']) {
          xAxisText
            .attr('font-size', flatOptions['xAxis.labels.style.fontSize']);
        }

        xAxisText.each(function() {
          if (this.getBoundingClientRect().height > maxXAxisLabelHeight) {
            maxXAxisLabelHeight = this.getBoundingClientRect().height;
          }
        });

        //check for x-axis title
        if (flatOptions['xAxis.title.text']) {
          var xAxisTitle = xAxisContainer
            .append("text")
            .attr("x", currentOptions.chart.width / 2)
            .style("text-anchor", "middle")
            .text(flatOptions['xAxis.title.text']);
          maxXAxisLabelHeight = maxXAxisLabelHeight + xAxisTitle.node().getBoundingClientRect().height + 10;
          xAxisTitle.attr("dy", maxXAxisLabelHeight);
        }
        // if grouped columns, show legend
        if (flatOptions['legend.enabled']!=false && data.length > 1) {
          var legend;
          if (flatOptions['plotOptions.series.stacking'] ||
            flatOptions['plotOptions.column.stacking']) {
            legend = svg.selectAll(".legend")
              .data(categories.slice().reverse())
              .enter()
              .append("g")
          } else {
            legend = svg.selectAll(".legend")
              .data(categories.slice())
              .enter()
              .append("g")
          }
          legend
            .attr("class", "legend")
            .attr("transform", function(d, i) {
              return "translate(0," + i * 19 + ")";
            });

          legend.append("rect")
            .attr("x", currentOptions.chart.width - 15 + currentOptions.chart.marginRight)
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", color);

          legend.append("text")
            .attr("x", currentOptions.chart.width - 21 + currentOptions.chart.marginRight)
            .attr("y", 9)
            .attr("dy", ".15em")
            .style("text-anchor", "end")
            .text(function(d) {
              return d;
            });
        }
        //If is RTL, reverse all
        if (bentoServices.isRTL() === true) {
          bentoChartService.makeRTL(element, svg, flatOptions, currentOptions, xAxisTitle, yAxisTitle, yAxisText, legend, maxXAxisLabelHeight, maxYAxisLabelWidth)
        }
      }

      function returnColor(d) {
        if (d.color) {
          return d.color;
        } else {
          return color(d.name);
        }
      }

      function onDataChanged(data, oldData) {
        if (data && data.series) {
          resizeAndRenderChart();
        }
      }

      function onWindowResize() {
        scope.$apply();
      }

      function resizeAndRenderChart(width) {
        if (renderTimeout) {
          $timeout.cancel(renderTimeout);
        }
        renderTimeout = $timeout(function() {
          currentOptions.chart.width = element[0].offsetWidth - currentOptions.chart.marginLeft - currentOptions.chart.marginRight;
          if(currentOptions.chart.width < 0){
            currentOptions.chart.width = 0;
          }
          render();
        }, 500);
      }

      function onDestroy() {
        angular.element($window).off('resize', onWindowResize);
        d3.select(element[0]).select('svg').remove();
      }
    }
  }
})();
(function() {

  "use strict";

  angular.module('bento.d3').directive('bentoD3BubbleChart', bentoD3BubbleChart);
  bentoD3BubbleChart.$inject = ['bentoD3Config', '$parse', '$log', '$http', '$window', '$timeout', 'bentoChartService'];

  function bentoD3BubbleChart(config, $parse, $log, $http, $window, $timeout, bentoChartService) {
    return {
      restrict: 'A',
      scope: {
        data: '=?'
      },
      link: linkFunc
    }

    function linkFunc(scope, element, attr, ctrls) {
      var defaultOptions = {
        chart: {
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0,
          marginLeft: 0,
          height: 200,
          radius: {
            min: 20,
            max: 70
          }
        }
      };
      var currentOptions = angular.merge(defaultOptions, scope.data);
      var renderTimeout;

      var self = this;
      var color = config.brand10();
      var nodes = self.nodes = null;
      var svg = null;
      var circles = null;
      var radius = null;

      var settings = null

      var m = 1;
      var padding = 100;

      var simulation;
      //   .force("charge",0)
      //   .force("gravity",0);

      var x = null;
      var hasInit = false;

      scope.$watch('data', onDataChanged, true);
      scope.$on('$destroy', onDestroy);
      element.on('$destroy', onDestroy);

      //set up resize
      angular.element($window).on('resize', onWindowResize);
      scope.$watch(function() {
        return element[0].offsetWidth;
      }, resizeAndRenderChart);

      function onDataChanged(data) {
        if (data && data.series && data.series[0].data) {
          hasInit = true;
          resizeAndRenderChart();
        }
      }

      function returnColor(d) {
        if (d.color) {
          return d.color;
        } else {
          return color(d.name);
        }
      }

      function render() {
        // console.log('render', scope.data.series[0].data)
        d3.select(element[0]).select('svg').remove();
        svg = d3.select(element[0]).append('svg')
          .attr('width', currentOptions.chart.width)
          .attr('height', currentOptions.chart.height)
          .attr('class', 'bento-d3-bubbles');

        x = d3.scalePoint().domain(d3.range(m)).range([0, currentOptions.chart.width], 1);

        nodes = angular.copy(scope.data.series[0].data);
        self.nodes = nodes;

        var min_radius = d3.min(nodes, function(d) {
          return parseInt(d.value);
        });
        var max_radius = d3.max(nodes, function(d) {
          return parseInt(d.value);
        });

        radius = d3.scaleLinear().domain([min_radius, max_radius]).range([currentOptions.chart.radius.min, currentOptions.chart.radius.max]);

        nodes.forEach(function(item, index) {
          var i = Math.floor(Math.random() * m); //color
          var v = (i + 1) / m * -Math.log(Math.random()); //value
          // item.color = color(i);
          
          item.cx = x(i);
          item.cy = currentOptions.chart.height / 2;
          item[0] = 0;
          item[1] = 0;
          item.count = item.value;
          item.value = radius(item.value);
          item.name = item.name;
          item.id = Math.random().toString(36).substr(2, 9);
        });

        simulation = d3.forceSimulation()
          .nodes(nodes)
          .force('x', d3.forceX().strength(0))
          .force('y', d3.forceY().strength(0))
          .force('center',d3.forceCenter(currentOptions.chart.width / 2, currentOptions.chart.height / 2))
          .on('tick', tick);

        circles = svg.selectAll('g')
          .data(nodes)
          .enter()
          .append('g')
          .attr('id', function(d) {
            return 'node' + d.id
          })
          .attr('class', 'node')
          .attr('cx', function(d) {
            return d.cx
          })
          .attr('cy', function(d) {
            return d.cy
          })
          .attr('transform', function(d) {
            return 'translate(' + d[0] + ',' + d[1]+ ')';
          });

        var circle = circles
          .append('circle')
          .attr('class', function(d) {
            return 'bubble ' + (d.type ? d.type : '');
          })
          .attr('fill', returnColor)
          .attr('r', function(d) {
            return d.value
          });
        // var text = circles
        //   .append('text')
        //   .attr('dy', '.3em')
        //   .attr('fill', '#ffffff')
        //   .style('text-anchor', 'middle')
        //   .text(function(d) {
        //     return d.name.substring(0, d.value / 3);
        //   })
        //   .style('font-size', '10px')
        //   .style('font-size', function(d) {
        //     var size = (2 * d.value - 10) / this.getComputedTextLength() * 8;
        //     return size + 'px';
        //   });

        var text = circles.append("text")
          .selectAll("tspan")
          .data(function(d) {
            return d.name.split(" ");
          })
          .enter().append("tspan")
          .attr("x", 0)
          .attr("y", function(d, i, elements) {
            return 18 + (i - elements.length / 2 - 0.5) * 15;
          })
          .attr('fill', '#ffffff')
          .attr('text-anchor', 'middle')
          .text(function(d) {
            return d;
          });
      }

      function tick(e) {
        circles.each(gravity(.5 * simulation.alpha()))
          .each(collide(.5))
          .attr('cx', function(d) {
            return d[0];
          })
          .attr('cy', function(d) {
            return d.y;
          })
          .attr('transform', function(d) {
            return 'translate(' + d[0] + ',' + d[1]+ ')';
          });
      }


      function gravity(alpha) {
        return function(d) {
          var r = d.value + 4;
          d[1]+= (d.cy - d.y) * alpha;
          d[0] += (d.cx - d[0]) * alpha / 8;
          if (d[0] - r < 0) {
            d[0] = r;
          } else {
            if (d[0] + r > currentOptions.chart.width) {
              d[0] = currentOptions.chart.width - r;
            }
          }
          if (d[1]- r < 0) {
            d[1]= r;
          } else {
            if (d[1]+ r > currentOptions.chart.height) {
              d[1]= currentOptions.chart.height - r;
            }
          }
        }
      };

      function collide(alpha) {
        var quadtree = d3.quadtree(nodes);
        return function(d) {
          var r = d.value + radius.domain()[1] + padding,
            nx1 = d[0] - r,
            nx2 = d[0] + r,
            ny1 = d[1]- r,
            ny2 = d[1]+ r;
          quadtree.visit(function(quad, x1, y1, x2, y2) {
            //console.log('quad',quad);
            if (quad.data && (quad.data !== d)) {
              var x = d[0] - quad.data[0];
              var y = d[1]- quad.data[1];
              var l = Math.sqrt(x * x + y * y);
              var r = d.value + quad.data.value;
              if (l < r) {
                l = (l - r) / l * alpha;
                d[0] -= x *= l;
                d[1]-= y *= l;
                quad.data[0] += x;
                quad.data[1] += y;
              }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
          });
          //console.log('quadtree-l',l);
        };
      }

      function onWindowResize() {
        scope.$apply();
      }

      function resizeAndRenderChart(width) {
        if (!hasInit) {
          return;
        }
        // console.log('resize')

        if (renderTimeout) {
          $timeout.cancel(renderTimeout);
        }
        renderTimeout = $timeout(function() {
          currentOptions.chart.width = element[0].offsetWidth - currentOptions.chart.marginLeft - currentOptions.chart.marginRight;
          if (currentOptions.chart.width < 0) {
            currentOptions.chart.width = 0;
          }
          render();
        }, 500);
      }

      function onDestroy() {
        angular.element($window).off('resize', onWindowResize);
        d3.select(element[0]).select('svg').remove();
      }
    }
  }
})();