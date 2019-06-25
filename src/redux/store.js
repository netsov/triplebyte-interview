import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  loadState(),
  applyMiddleware(thunk)
);

store.subscribe(() => saveState(store.getState()));

function loadState() {
  try {
    const value = localStorage.getItem('state');
    return value ? JSON.parse(value) : undefined;
  } catch {
    return undefined;
  }
}

function saveState(state) {
  localStorage.setItem('state', JSON.stringify(state));
}
