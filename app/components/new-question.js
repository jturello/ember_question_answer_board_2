import Ember from 'ember';

export default Ember.Component.extend({
  displayForm: false,
  actions: {
    questionFormShow() {
      this.set('displayForm', true);
    },

    save() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        notes: this.get('notes'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
