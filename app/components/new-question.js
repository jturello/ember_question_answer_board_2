import Ember from 'ember';

export default Ember.Component.extend({
  displayNewForm: false,
  actions: {
    addQuestionFormShow() {
      this.set('displayNewForm', true);
    },

    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        content: this.get('content') ? this.get('content'): "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('displayNewForm', false);
      this.sendAction('save', params);
    }
  }
});
