import Ember from 'ember';

export default Ember.Component.extend({
  displayUpdateForm: false,
  actions: {
    updateQuestionFormShow() {
      this.set('displayUpdateForm', true);
    },

    update(question) {
      var params = {
        author: this.get('author'), // ? this.get('author') : "",
        content: this.get('content'), // ? this.get('content'): "",
        notes: this.get('notes'), // ? this.get('notes') : "",
      };
      // debugger;
      this.set('displayUpdateForm', false);
      this.sendAction('update', question, params);
    }
  } 
});
