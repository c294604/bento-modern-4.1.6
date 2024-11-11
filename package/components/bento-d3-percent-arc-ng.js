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