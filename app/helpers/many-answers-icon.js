import Ember from 'ember';

export function manyAnswersIcon(params) {
  var question = params[0];

  if (question.get('answers').get('length') >= 4) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span> - ');
  }
}

export default Ember.Helper.helper(manyAnswersIcon);
