import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    save(params) {
      if (!((params.author===undefined) || (params.author==="") || (params.contents===undefined) || (params.contents===""))) {
        var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
        this.transitionTo('index');
      }
    },
  }
});
