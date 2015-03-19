import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    samples: {embedded: 'always'},
    points: {embedded: 'always'}
  }
});
