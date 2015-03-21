import InputRange from './input-range';

export default InputRange.extend({

  setMax: function() {
    this.set('max', this.get('value'));
  }.on('didInsertElement')

});
