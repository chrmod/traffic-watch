import Ember from 'ember';
// import d3 from 'd3';

export default Ember.Controller.extend({

  timeSeriesBarContent: [
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
      label: "Avarage density in Warsaw",
      value: 49668,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
      label: "Avarage density in Warsaw",
      value: 68344,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
      label: "Avarage density in Warsaw",
      value: 60654,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
      label: "Avarage density in Warsaw",
      value: 48240,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
      label: "Avarage density in Warsaw",
      value: 62074,
      type: "money"
    }
  ],

  // Used only for time series chart
  timeSeriesLineContent: [
    {
      time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
      label: "Warsaw",
      value: 17326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-05-15"),
      label: "Cracow",
      value: 4515,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
      label: "Warsaw",
      value: 15326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-06-15"),
      label: "Cracow",
      value: 1515,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
      label: "Warsaw",
      value: 14326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-07-16"),
      label: "Cracow",
      value: 8518,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
      label: "Warsaw",
      value: 42301,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-08-16"),
      label: "Cracow",
      value: 90191,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
      label: "Warsaw",
      value: 57326,
      type: "money"
    }, {
      time: d3.time.format('%Y-%m-%d').parse("2013-09-16"),
      label: "Cracow",
      value: 39544,
      type: "money"
    }
  ]
});
