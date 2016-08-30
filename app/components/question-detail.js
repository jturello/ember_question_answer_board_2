import Ember from 'ember';

export default Ember.Component.extend({

  // sortBy: ['cost:asc'],
  // sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },

    addAnswer(params) {
      this.sendAction('addAnswer', params);
    }
  }
});
