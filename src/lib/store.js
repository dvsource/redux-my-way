const creteStore = (reducer, initialState = {}, enhancer = null) => {
  const store = {};
  const listeners = [];
  let state = initialState;
  let activeReducer = reducer;

  store.getState = () => state;

  store.dispatch = (action) => {
    state = activeReducer(state, action);
    listeners.forEach((listener) => listener());
  };

  store.subscribe = (listener) => listeners.push(listener);

  store.replaceReducer = (reducer) => {
    activeReducer = reducer;
  };

  return store;
};

module.exports = creteStore;
