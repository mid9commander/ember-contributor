import DS from 'ember-data';

// tells us where to find the data
export default DS.RESTAdapter.extend({
  namespace: 'api'                                     
});
