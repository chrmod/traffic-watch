import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('marker', 'Marker', {
  // Specify the other units that are required for this test.
  needs: ['model:city']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
