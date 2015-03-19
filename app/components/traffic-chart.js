import Ember from 'ember';
import d3 from '../utils/d3';

export default Ember.Component.extend({

  classNames: ["chart-container", "zoom"],

  timeSeriesBarContent: [],

  xPosition: d3.time.format("%H")(new Date()),

  reloader: function () {
    this.sendAction('changeCity', this.get('currentCity'));
  }.observes('currentCity').on('init'),

  actions: {

    changeChart: function () {
      this.sendAction('changeChart');
    },

    setDay: function (day) {
      this.sendAction('setDay', day);
    }

  }

});
