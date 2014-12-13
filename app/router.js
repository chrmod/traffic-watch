import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard', { path: '/'});
  this.resource('timeControl', { path: 'timeControls/:timeControl_id' }, function() { });
});

export default Router;
