import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import layoutReducer from '../../components/Layout/reducers/layoutReducer';
import appBarReducer from '../../components/Layout/AppBar/reducers/appBarReducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    layoutReducer,
    appBarReducer,
  });

export default rootReducer;
