import Ember from 'ember';

export default Ember.Component.extend({
  displayUpdateForm: false,
  actions: {
    updateQuestionFormShow() {
      this.set('displayUpdateForm', true);
    },

    update(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'), 
      };
      this.set('displayUpdateForm', false);
      this.set('author', "");
      this.set('content', "");
      this.set('notes', "");
      this.sendAction('update', question, params);
    }
  }
});
