import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),

  answerCount: Ember.computed('question.answers', function() {
    return this.get('question').get('answers').get('length');
  }),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    }
  }
});
