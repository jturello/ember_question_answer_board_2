 import DS from 'ember-data';

export default DS.Model.extend({
  author : DS.attr(),
  contents: DS.attr(),
  question: DS.belongsTo('question', { async: true})
});
