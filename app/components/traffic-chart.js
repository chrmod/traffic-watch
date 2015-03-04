import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ["chart-container", "zoom"],

  timeSeriesBarContent: [],

  xPosition: 12,

  reloader: function () {
    this.sendAction('changeCity', this.get('currentCity'));
  }.observes('currentCity').on('init'),

  actions: {

    changeChart: function () {
      this.sendAction('changeChart');
    }

  }

});
