import Ember from 'ember';
import {MAP_TYPES} from '../../components/google-map';

export default Ember.ObjectController.extend({
  needs: ['cities'],

  timeSeriesBarContent: [],

  lat: function () {
    return this.get('center').split(',')[0];
  }.property('center'),

  lng: function () {
    return this.get('center').split(',')[1];
  }.property('center'),

  zoom:        10,
  type:        'road',
  mapTypes:    MAP_TYPES,

  timeSeriesLineContent: Ember.computed.map('model.stats', function (stat) {
    return {
      time: d3.time.format.iso.parse(stat.get('time')),
      value: stat.get('value')
    };
  })
});
