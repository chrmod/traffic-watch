import Ember from 'ember';
import d3 from '../../utils/d3';
import request from 'ic-ajax';

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

  note: null,

  xPosition: d3.time.format("%H")(new Date()),

  renderMap: null,

  getLoad: function () {
    var date = this.getDate();
    var promises = []
    this.get('polylines').forEach(function (polyline) {
      var polyline = polyline;
      promises.addObject(request({
        url: '/marker_load/%@'.fmt(polyline.get('marker.id')),
        type: 'GET',
        data: {
          date: date
        }
      }).then(function (response) {
        polyline.get('marker').set('current_load', response['load']);
        polyline.notifyPropertyChange('current_load');
      }).catch(function (error) {
        console.log(error);
      }));
    })
    new Ember.RSVP.all(promises).then(function() {
      this.set('renderMap', this.get('xPosition'));
    }.bind(this));
  },

  getDate: function () {
    var date = new Date();
    var hour = this.get('xPosition');
    var hourDifference = date.getHours() - hour;
    var dateInNumber = date - hourDifference * 60 * 60 * 1000;
    return new Date(dateInNumber);
  },

  setPolylinesTraffic: function () {
    this.getLoad()
  }.observes('xPosition'),

  weekStats: [],

  actions: {

    changeCity: function (city) {
      return this.transitionToRoute('cities.city', city);
    },

    setDay: function (day) {
      this.set('day', day);
      this.notifyPropertyChange('weekStats');
    }
  }
});
