import Ember from 'ember';
import d3 from '../utils/d3';
// import scrubber from '../components/scrubber';

export default Ember.Component.extend({

  classNames: ["chart-container"],

  timeSeriesBarContent: [],

  //   {
  //     time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T9:00:00Z"),
  //     label: "Avarage density in Warsaw",
  //     value: 50

  //   }, {
  //     time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T12:00:00Z"),
  //     label: "Avarage density in Warsaw",
  //     value: 40

  //   }, {
  //     time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T15:00:00Z"),
  //     label: "Avarage density in Warsaw",
  //     value: 60

  //   }, {
  //     time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T18:00:00Z"),
  //     label: "Avarage density in Warsaw",
  //     value: 55

  //   }, {
  //     time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T21:00:00Z"),
  //     label: "Avarage density in Warsaw",
  //     value: 30

  //   }
  // ],

  // Used only for time series chart
  timeSeriesLineContent: [
    {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T00:00:00Z"),
      label: "Warsaw",
      value: 20
    },
    {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T01:00:00Z"),
      label: "Warsaw",
      value: 34
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T02:00:00Z"),
      label: "Warsaw",
      value: 36
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T03:00:00Z"),
      label: "Warsaw",
      value: 40
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T04:00:00Z"),
      label: "Warsaw",
      value: 45
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T05:00:00Z"),
      label: "Warsaw",
      value: 50
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T06:00:00Z"),
      label: "Warsaw",
      value: 70
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T07:00:00Z"),
      label: "Warsaw",
      value: 64
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T08:00:00Z"),
      label: "Warsaw",
      value: 71
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T09:00:00Z"),
      label: "Warsaw",
      value: 74
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T10:00:00Z"),
      label: "Warsaw",
      value: 80
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T11:00:00Z"),
      label: "Warsaw",
      value: 79
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T12:00:00Z"),
      label: "Warsaw",
      value: 70
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T13:00:00Z"),
      label: "Warsaw",
      value: 67
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T14:00:00Z"),
      label: "Warsaw",
      value: 69
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T15:00:00Z"),
      label: "Warsaw",
      value: 64
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T16:00:00Z"),
      label: "Warsaw",
      value: 66
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T17:00:00Z"),
      label: "Warsaw",
      value: 56
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T18:00:00Z"),
      label: "Warsaw",
      value: 51
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T19:00:00Z"),
      label: "Warsaw",
      value: 45
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T20:00:00Z"),
      label: "Warsaw",
      value: 30
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T21:00:00Z"),
      label: "Warsaw",
      value: 34
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T22:00:00Z"),
      label: "Warsaw",
      value: 36
    }, {
      time: d3.time.format('%Y-%m-%dT%H:%M:%SZ').parse("2014-07-01T23:00:00Z"),
      label: "Warsaw",
      value: 30
    }
  ],

  actions: {
    setXPosition: function(position) {
      this.set('xPosition', position);
    }
  }
});