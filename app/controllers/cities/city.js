import Ember from 'ember';
import {MAP_TYPES} from '../../components/google-map';

export default Ember.ObjectController.extend({
  needs: ['cities'],

  lat: function () {
    return this.get('center').split(',')[0];
  }.property('center'),

  lng: function () {
    return this.get('center').split(',')[1];
  }.property('center'),

  zoom:        10,
  type:        'road',
  mapTypes:    MAP_TYPES

});
