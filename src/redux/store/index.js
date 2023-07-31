/**
 * Main store function
 */
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, compose, applyMiddleware } from 'redux';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { APP_ENV } from '../../utils/config';
import { rootReducer } from '../reducers';
// import initialState from '../reducers/initialState';

export const history = createBrowserHistory();

function configureStoreProd() {
  const reactRouterMiddleware = routerMiddleware(history);

  const middlewares = [thunk, reactRouterMiddleware];

  return createStore(
    rootReducer(history),

    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev() {
  const reactRouterMiddleware = routerMiddleware(history);

  const middlewares = [
    // reduxImmutableStateInvariant(),
    // require('redux-immutable-state-invariant').default(),
    logger,

    thunk,

    reactRouterMiddleware,
  ];

  const store = createStore(
    rootReducer(history),

    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
}

const configureStore =
  APP_ENV === 'PRODUCTION' ? configureStoreProd : configureStoreDev;

const Store = configureStore();

// export type DispatchType = typeof Store.dispatch;
export default Store;
