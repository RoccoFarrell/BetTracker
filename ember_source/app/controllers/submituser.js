import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    publishUser: function() {
      var newUser = this.store.createRecord('user', {
        username: this.get('username'),
        firstname: this.get('firstname'),
        lastname: this.get('lastname')
      });
      newUser.save();
    }
  }
});
