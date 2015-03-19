import DS from 'ember-data';
import d3 from '../utils/d3';

export default DS.Model.extend({

  time:                    DS.attr('string'),
  created_at:              DS.attr('string'),
  traffic_load_percentage: DS.attr('string'),
  marker:                  DS.belongsTo('marker'),

  day: function () {
    var date = this.get('created_at'),
        parsedDate = d3.time.format.iso.parse(date),
        format = d3.time.format("%a");

    return format(parsedDate);
  }.property('created_at')

});
