import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('post', {path: 'post/:post_id'});
  this.route('new-post');
  this.route('admin');
  this.route('categoryOverlord', {path: 'categoryOverlord/:category_overlord_id'});
  this.route('category', {path: 'category/:category_id'});
});

export default Router;
