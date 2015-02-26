import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ["chart-container", "zoom"],

  timeSeriesBarContent: [],

  xPosition: 12,


  actions: {
    changeChart: function () {
      this.sendAction('changeChart');
    }
  }

});
