import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import app from './reducers';

const configureStore = (initialState) => {

  let middlewares = [
    thunkMiddleware,
  ];

  const store = createStore(
    combineReducers({
      form: formReducer,
      routing: routerReducer,
      app
    }),
    initialState,
    applyMiddleware(...middlewares),
  );

  if (process.env.NODE_ENV === 'development' && module.hot) {
  	module.hot.accept('./reducers', () => {
  		store.replaceReducer(require('./reducers').default);
  	});
  }

  return store;
};

export default configureStore;
