import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save(params) {
      debugger;
      var newQuestion = this.store.createRecord('question', params);
      debugger;
      newQuestion.save();
      debugger;
      this.transitionTo('index');
    },

    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(!(params[key]===undefined) || (params[key]==="")) {
          question.set(key, params[key]);
        }
      });
      debugger;
      question.save();
      // debugger;
      this.transitionTo('index');
    }
  }
});
