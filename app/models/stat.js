import DS from 'ember-data';
import Ember from 'ember';
import d3 from '../utils/d3';

export default DS.Model.extend({

  created_at:    DS.attr('string'),
  weighted_mean: DS.attr('string'),
  city:          DS.belongsTo('city'),

  time:          Ember.computed.alias('created_at'),
  value:         Ember.computed.alias('weighted_mean')

  // day: function () {
  //   var date = this.get('created_at'),
  //       parsedDate = d3.time.format.iso.parse(date),
  //       format = d3.time.format("%a");

  //   return format(parsedDate);
  // }.property('created_at')

});
