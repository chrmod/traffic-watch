import DS from 'ember-data';

export default DS.Model.extend({

  time:                    DS.attr('string'),
  created_at:              DS.attr('string'),
  traffic_load_percentage: DS.attr('string'),
  marker:                  DS.belongsTo('marker')

});
