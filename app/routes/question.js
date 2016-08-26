import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
      return Ember.RSVP.hash({
        question: this.store.findRecord('question', params.question_id),
        answers: this.store.findAll('answer')
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
      // debugger;
      this.refresh();
      // this.transitionTo('question');
    },
    destroyQuestion(rental) {
      rental.destroyQuestion();
      this.transitionTo('index');
    },
  }
});
