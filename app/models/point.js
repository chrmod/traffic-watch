import DS from 'ember-data';

export default DS.Model.extend({
  lat: DS.attr('string'),
  lng: DS.attr('string'),
  polyline: DS.belongsTo('polyline')
});
