/**
 * Bento D3 Bar and Column Charts
 *
 * @author Joe Huang <joe.huang@thomsonreuters.com>
 * @version 0.1
 * @date 1/06/2016
 *
 * @description Angular Directive Wrapper for D3
 * d3js.org
 */

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