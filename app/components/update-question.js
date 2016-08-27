import Ember from 'ember';

export default Ember.Component.extend({
  displayUpdateForm: false,
  actions: {
    updateQuestionFormShow() {
      this.set('displayUpdateForm', true);
    },

    update(question) {
      var params = {
        author: this.get('uAuthor'),
        content: this.get('uContent'),
        notes: this.get('notes'),
      };
      this.set('displayUpdateForm', false);
      this.set('uAuthor', "");
      this.set('uContent', "");
      this.set('notes', "");
      this.sendAction('update', question, params);
    }
  }
});
