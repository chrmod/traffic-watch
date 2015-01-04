import Ember from 'ember';

export default Ember.Controller.extend({
  zipPosition: 0,

  actions: {
    setZipPosition: function(position) {
      this.set('zipPosition', position);
    },
    readPosition: function() {
      console.log("someLog");
      console.log(this.get('zipPosition'));
    }
  }
});
