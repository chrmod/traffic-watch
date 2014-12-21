import Ember from 'ember';
import d3 from '../utils/d3';

export default Ember.Component.extend({

  classNames: ["d3-slider"],

  draw: function() {

    var dragCircle = d3.behavior.drag()
      .on('dragstart', function () {
      d3.event.sourceEvent.stopPropagation();
      d3.event.sourceEvent.preventDefault();
      console.log('Start Dragging Circle');
    })
      .on('drag', function (d) {
      // console.log(d.cx);
      if(34 > d.cx ) {
        d.cx = 34;
      } else if(d.cx > 370) {
        d.cx = 370;
      } else {
        d.cx += d3.event.dx;
      }
      if( d.cx >= 34 && d.cx <= 370) {
        d3.select(this).attr('cx', d.cx).attr('cy', d.cy);
      }
    });

    var svg = d3.select('.d3-slider-chart').append('svg').attr('viewBox', '-15 0 400 20');
    var g = svg.selectAll('g').data([{
        x: 10,
        y: 10
    }])
        .enter().append('g');

    g.append("line")          // attach a line
      .style("stroke", "black")  // colour the line
      .attr("x1", 0)     // x position of the first end of the line
      .attr("y1", 10)      // y position of the first end of the line
      .attr("x2", 600)     // x position of the second end of the line
      .attr("y2", 10);

    g.selectAll('circle').data([{
        cx: 34,
        cy: 10
    }]).enter()
      .append('circle')
      .attr('cx', function (d) {
      return d.cx;
    })
      .attr('cy', function (d) {
      return d.cy;
    })
      .attr('r', 5)
      .call(dragCircle)
      .on('click', function () {
      console.log('send data to ember');
    });
  }.on('didInsertElement')
});
