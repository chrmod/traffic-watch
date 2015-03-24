import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ["chart-container", "zoom"],

  timeSeriesBarContent: [],

  hour: function() {
    return this.get('xPosition') + ":00";
  }.property('xPosition'),

  setScaledInputRange: function () {
    return this.get('day') == d3.time.format("%a")(new Date());
  }.property('day'),

  reloader: function () {
    this.sendAction('changeCity', this.get('currentCity'));
  }.observes('currentCity').on('init'),

  actions: {

    setDay: function (day) {
      this.sendAction('setDay', day);
    }

  }

});
