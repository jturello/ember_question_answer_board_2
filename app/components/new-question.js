import Ember from 'ember';

export default Ember.Component.extend({
  displayNewForm: false,
  actions: {
    questionFormShow() {
      this.set('displayNewForm', true);
    },

    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        question: this.get('question') ? this.get('question'): "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      // debugger;
      this.set('displayNewForm', false);
      this.sendAction('save', params);
    }
  }
});
