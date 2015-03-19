import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  marker:    DS.belongsTo('marker'),
  points:    DS.hasMany('point'),

  current_load: Ember.computed('marker', function () {
    return this.get('marker.current_load');
  }),

  strokeColor: Ember.computed('current_load', function () {
    var percentage = parseInt(this.get('current_load').split('%')[0])
    if(percentage > 150) {
      return "#FF0000";
    } else if (percentage > 120) {
      return "#FFFF00";
    } else {
      return "#00FF00";
    }
  }),

  path: Ember.computed.map('points', function (point) {
    return {
      lat: point.get('lat'),
      lng: point.get('lng')
    };
  })
});
