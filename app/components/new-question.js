import Ember from 'ember';

export default Ember.Component.extend({
  displayForm: false,
  actions: {
    questionFormShow() {
      this.set('displayForm', true);
    },

    save() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        question: this.get('question') ? this.get('question'): "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      // debugger;
      this.set('displayForm', false);
      this.sendAction('save', params);
    }
  }
});
