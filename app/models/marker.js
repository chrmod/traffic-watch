import DS from 'ember-data';

export default DS.Model.extend({

  lat:                    DS.attr('string'),
  lng:                    DS.attr('string'),
  time_without_traffic:   DS.attr('string'),
  city:                   DS.belongsTo('city'),
  samples:                DS.hasMany('sample', {async: true}),
  current_load:           DS.attr('string'),
  polylines:              DS.hasMany('polyline')
  // hasInfoWindow:          true,
  // isInfoWindowVisible:    true,
  // description:            Ember.computed.alias('current_load')

});
