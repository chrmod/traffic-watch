import Ember from 'ember';
import {MAP_TYPES} from '../../components/google-map';
import d3 from '../../utils/d3';

export default Ember.ObjectController.extend({
  needs: ['cities'],

// MAP

  lat: function () {
    return this.get('center').split(',')[0];
  }.property('center'),

  lng: function () {
    return this.get('center').split(',')[1];
  }.property('center'),

  zoom:        10,
  type:        'road',
  mapTypes:    MAP_TYPES,

// CHART
  timeSeriesBarContent: [],
  timeSeriesLineContent: Ember.computed.map('model.stats', function (stat) {
    return {
      time: d3.time.format.iso.parse(stat.get('time')),
      value: stat.get('value')
    };
  })
});
