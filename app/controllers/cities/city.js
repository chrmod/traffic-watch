import Ember from 'ember';
import d3 from '../../utils/d3';

export default Ember.ObjectController.extend({
  needs: ['cities'],
// CHART
  timeSeriesBarContent: [],
  timeSeriesLineContent: Ember.computed.map('model.stats', function (stat) {
    return {
      time: d3.time.format.iso.parse(stat.get('time')),
      value: stat.get('value')
    };
  })
});
