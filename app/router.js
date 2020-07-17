import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('category', { path: '/:category_id' }, function() {
    this.route('subcategory', { path: '/:subcategory_id' }, function() {
      this.route('build', { path: '/:build_slug' });
    });
  });
});
