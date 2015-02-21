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
  mapTypes:    MAP_TYPES,

  // markers: [
  //     { title: 'zero',   lat: 52.2220515,  lng: 21.2504114,  hasInfoWindow: false  },
  //     { title: 'one',    lat: 52.1490187,  lng: 21.1888543,  hasInfoWindow: false  },
      // { title: 'two',    lat: 52.0994115,  lng: 21.024054,   hasInfoWindow: false  },
      // { title: 'three',  lat: 52.16483,    lng: 20.9315745,  hasInfoWindow: false  },
      // { title: 'four',   lat: 52.2448711,  lng: 20.9015523,  hasInfoWindow: false  },
      // { title: 'five',   lat: 52.3212418,  lng: 20.9135241,  hasInfoWindow: false  },
      // { title: 'six',    lat: 52.356973,   lng: 20.9401855,  hasInfoWindow: false  },
      // { title: 'seven',  lat: 52.3074503,  lng: 21.0810085,  hasInfoWindow: false  },
      // { title: 'center', lat: 52.2301036,  lng: 21.0116003,  hasInfoWindow: false  }
    // ]

});
