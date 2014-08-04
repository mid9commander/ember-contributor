import Ember from 'ember';

var Router = Ember.Router.extend({
  location: SkillfeedContributorENV.locationType
});

Router.map(function() {
  this.route('courses');
});

export default Router;
