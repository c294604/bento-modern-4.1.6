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