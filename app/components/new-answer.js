import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    addAnswer() {
      var params = {
        author: this.get('author'),
        contents: this.get('contents'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.set('author', "");
      this.set('contents', "");
      this.sendAction('addAnswer', params);
    }
  }
});
