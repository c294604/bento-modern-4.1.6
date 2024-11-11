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