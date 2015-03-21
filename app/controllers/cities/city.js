import Ember from 'ember';
import d3 from '../../utils/d3';

export default Ember.ObjectController.extend({
  needs: ['cities'],

  names: Ember.computed.alias('controllers.cities.names'),
  currentCity: 'Warsaw',
// CHART
  timeSeriesBarContent: [],

  day: d3.time.format("%a")(new Date()),

  filteredWeekStats: Ember.computed.filter('weekStats', function (stat) {
    var date = stat.created_at,
        parsedDate = d3.time.format.iso.parse(date),
        format = d3.time.format("%a");

    return format(parsedDate) === this.get('day');
  }),

  weekContent: Ember.computed.map('filteredWeekStats', function (stat) {
    return {
      time: d3.time.format.iso.parse(stat.created_at),
      value: parseInt(stat.weighted_mean)
    };
  }),

  xPosition: d3.time.format("%H")(new Date()),

  // setPolylinesTraffic: function () {
    // m = this.get('polylines.firstObject.marker')
    // console.log("sets");
    // console.log(this.get('polylines'));
    // // p = this.get('polylines.firstObject')
    // p.set('current_load', load)
  // }.observes('xPosition'),

  weekStats: [],

  actions: {

    changeChart: function () {
      this.toggleProperty('dayChart');
    },

    changeCity: function (city) {
      this.set('dayChart', false);
      return this.transitionToRoute('cities.city', city);
    },

    setDay: function (day) {
      this.set('day', day);
      this.notifyPropertyChange('weekStats');
    }
  }
});
