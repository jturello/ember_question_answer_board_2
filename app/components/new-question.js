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
        contents: this.get('contents') ? this.get('contents'): "",
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('displayNewForm', false);
      this.sendAction('save', params);

      this.set('author', "");
      this.set('contents', "");
      this.set('notes', "");

    }
  }
});
