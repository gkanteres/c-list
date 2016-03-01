import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  categoryOverlord: DS.belongsTo('categoryOverlord', {async: true}),
  postingDetails: DS.attr(),
  posts: DS.hasMany('post', {async: true}),
});
