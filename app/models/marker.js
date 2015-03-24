import DS from 'ember-data';

export default DS.Model.extend({

  lat:                    DS.attr('string'),
  lng:                    DS.attr('string'),
  time_without_traffic:   DS.attr('string'),
  city:                   DS.belongsTo('city'),
  current_load:           DS.attr('string'),
  polylines:              DS.hasMany('polyline')

  // currently relation with samples is not needed
  // samples:                DS.hasMany('sample', {async: true}),

  // hasInfoWindow:          true,
  // isInfoWindowVisible:    true,
  // description:            Ember.computed.alias('current_load')

});
