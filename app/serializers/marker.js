import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    polylines: {embedded: 'always'}
    // samples not needed now
    // samples: {embedded: 'always'},
  }
});
