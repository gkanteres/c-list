import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    setPostDetails() {
      this.sendAction('setPostDetails');
    }
  }
});
