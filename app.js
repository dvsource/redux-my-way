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

// TEST

const reducer = (state = [], action) => {
  if (action.type === 'ADD') {
    state.push(action.data);
  }
  if (action.type === 'DELETE') {
    state.splice(
      state.findIndex((i) => i === action.data),
      1
    );
  }
  return state;
};

const store = creteStore(reducer, [1, 2, 3]);

console.log(store.getState());
store.dispatch({ type: 'ADD', data: 5 });
console.log(store.getState());
store.dispatch({ type: 'ADD', data: 7 });
console.log(store.getState());
store.dispatch({ type: 'DELETE', data: 2 });
console.log(store.getState());
store.dispatch({ type: 'DELETE', data: 5 });
console.log(store.getState());
