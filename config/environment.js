/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'traffic-watch',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.gstatic.com maps.googleapis.com mt0.googleapis.com",
      'font-src': "'self' http://fonts.gstatic.com",
      'connect-src': "'self' ws://ws.pusherapp.com",
      'img-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.gstatic.com maps.googleapis.com mt0.googleapis.com mt1.googleapis.com",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'"
    }
  };

  ENV.googleMap = {
    key: 'AIzaSyCgjEq8IOYmdK0hOKmBjVyPY9QY2aJErP4'
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
