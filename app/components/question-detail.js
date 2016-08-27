import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },

    addAnswer(params) {
      this.sendAction('addAnswer', params);
    }
  }
});
