import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('city', 'City', {
  // Specify the other units that are required for this test.
  needs: ['model:marker']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
