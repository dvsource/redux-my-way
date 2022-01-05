const creteStore = (reducer, initialState = {}, enhancer = null) => {
  const store = {};
  const listeners = [];
  let state = initialState;

  store.getState = () => state;

  store.dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  store.subscribe = (listener) => listeners.push(listener);

  return store;
};

module.exports = creteStore;
