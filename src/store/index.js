import { createStore, } from 'redux';
import user from './reducers';

export default createStore(
  user,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
