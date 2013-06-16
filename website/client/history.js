/**
 * @fileOverview The wiki read controller.
 */

var HP;

/**
 * @constructor
 * @extends {View}
 */
function History_() {
  this.init_();
}
History_.prototype = _.clone(View);
HP = History_.prototype;

/**
 * @type {string}
 */
HP.name = 'history';

/**
 * @param {string} pageName
 * @protected
 * @return {string}
 */
HP.pathGenerator_ = function(pageName) {
  return [this.name, pageName].join('/');
};

/**
 * @param {Object} state
 * @param {string} viewName
 * @param {string} pageName
 * @protected
 */
HP.render = function(state, viewName, pageName) {
  Session.set(SESSION_PAGE_NAME_KEY, pageName);
  Session.set(SESSION_PAGE_TYPE, viewName);
};

History = History_;

