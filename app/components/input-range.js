import Ember from 'ember';
import d3 from '../utils/d3';

export default Ember.Component.extend({
  tagName: 'input',
  attributeBindings: ['min', 'max', 'step', 'type', 'value', 'hour'],
  type: 'range',
  min: 0,
  max: 24,
  step: 1,

  change: function() {
    var value = this.get('element.value');
    this.set('value', +value);
  },

  input: function() {
    var value = this.get('element.value');
    this.set('hour', +value);
  }
});
