import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost(category) {
      var params = {
        email: this.get('email') || '',
        phone: this.get('phone') || '',
        title: this.get('title') || '',
        price: this.get('price') || '',
        location: this.get('location') || '',
        body: this.get('body') || '',
        images: this.get('images') || 'http://placehold.it/200x200',
        details: category.get('postingDetails') || '',
        category: this.get('category') || '',
        timestamp: new Date().getTime()
      }
      this.sendAction("createPost", params);
    },

    setPostDetails() {
      console.log("true");
    }
  }
});
