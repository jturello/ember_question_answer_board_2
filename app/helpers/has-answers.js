import Ember from 'ember';

export function hasAnswers(params) {
  var question = params[0];

  return Ember.String.htmlSafe("(" + question.get('answers').get('length') + ")");

}

export default Ember.Helper.helper(hasAnswers);
