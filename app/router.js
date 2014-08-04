import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SkillfeedContributorENV.locationType
});

Router.map(function() {
  this.resource('courses', function() {
    this.route('drafts');
    this.route('published');
    this.route('review');
  });             
});

export default Router;
