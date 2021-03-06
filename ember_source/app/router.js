import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('bets');
  this.route('users');
  this.route('submitbet');
  this.route('submituser');
});

export default Router;
