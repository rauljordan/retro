import { combineReducers } from 'redux';
import home from './home/reducers/home';

/**
 * This is what our global state tree looks like
 * @type {State}
 */
export default combineReducers({
  home,
});
