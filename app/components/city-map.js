import Ember from 'ember';
import {MAP_TYPES} from '../components/google-map';

export default Ember.Component.extend({

  classNames: ["city-map"],


  zoom:        10,
  type:        'road',
  mapTypes:    MAP_TYPES

});
