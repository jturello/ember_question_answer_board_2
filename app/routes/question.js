import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    model() {
      return Ember.RSVP.hash({
        question: this.store.findRecord('question', params.question_id),
        answers: this.store.finaAll('answer')
      });
  },
  actions: {
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(!((params[key]===undefined) || (params[key]===""))) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question/params.question_id');
    },
    destroyQuestion(rental) {
      rental.destroyQuestion();
      this.transitionTo('index');
    },
  }
});
