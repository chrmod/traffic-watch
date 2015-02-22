import Ember from 'ember';

export default Ember.ArrayController.extend({

  names: Ember.computed.mapBy('model', 'name'),

  currentCity: 'Warsaw',

  actions: {
    changeCity: function () {
      var city = this.get('currentCity');
      return this.transitionToRoute('cities.city', city);
    }
  }

});
