import Ember from 'ember';
import d3 from '../../utils/d3';

export default Ember.ObjectController.extend({
  needs: ['cities'],

  names: Ember.computed.alias('controllers.cities.names'),
  currentCity: 'Warsaw',
// CHART
  timeSeriesBarContent: [],

  dayContent: Ember.computed.map('model.stats', function (stat) {
    return {
      time: d3.time.format.iso.parse(stat.get('time')),
      value: stat.get('value')
    };
  }),

  // filteredWeekStats: function () {
  //   var weekStats = this.get('weekStats');
  //   return weekStats.filterBy('day', 'Wed');
  // }.property('model', 'weekStats'),

  day: 'Wed',

  filteredWeekStats: Ember.computed.filter('weekStats', function (stat) {
    var date = stat.created_at,
        parsedDate = d3.time.format.iso.parse(date),
        format = d3.time.format("%a");

    return format(parsedDate) === this.get('day');
  }),

  weekContent: Ember.computed.map('filteredWeekStats', function (stat) {
    return {
      time: d3.time.format.iso.parse(stat.created_at),
      value: stat.weighted_mean
    };
  }),

  weekStats: [],

  dayChart: false,

  actions: {

    changeChart: function () {
      this.toggleProperty('dayChart');
    },

    changeCity: function (city) {
      this.set('dayChart', false);
      return this.transitionToRoute('cities.city', city);
    },

    setDay: function (day) {
      console.log(day);
      this.set('day', day);
    }
  }
});
