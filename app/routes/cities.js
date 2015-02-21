import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function () {
    this.store.findAll('City');
  },

  model: function () {
    return this.store.find('city');
  }
});
