import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    markers: {embedded: 'always'},
    stats:   {embedded: 'always'}
  }
});
