import { createStore } from 'redux';
import dateApp from '../reducers'

const store = createStore(
    dateApp /* preloadedState, */,
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
     window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


