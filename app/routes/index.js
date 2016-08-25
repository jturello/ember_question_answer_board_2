import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save(params) {
      // debugger;
      // if (!((params.author===undefined) && (!(params.author===""))) && (!(params.content===undefined) && (!(params.content===""))))
      if (!((params.author===undefined) || (params.author==="") || (params.content===undefined) || (params.content===""))) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      }
    },
  }
});
