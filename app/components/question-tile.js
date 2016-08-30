import Ember from 'ember';

export default Ember.Component.extend({

  answerCount: Ember.computed('question', function() {
    return Ember.String.htmlSafe("(" + 'question'.get('answers').get('length') + ")");
  }),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
