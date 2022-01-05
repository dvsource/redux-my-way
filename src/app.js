const creteStore = require('./lib/store');
const combineReducers = require('./lib/reducer');

// Playground

const reducer1 = (state = [], action) => {
  if (action.type === 'ADD') {
    state.push(action.data);
  }
  return state;
};

const reducer2 = (state = [], action) => {
  if (action.type === 'DELETE') {
    state.splice(
      state.findIndex((i) => i === action.data),
      1
    );
  }
  return state;
};

const store = creteStore(combineReducers(reducer1, reducer2), [1, 2, 3]);

console.log(store.getState());
store.dispatch({ type: 'ADD', data: 5 });
console.log(store.getState());
store.dispatch({ type: 'ADD', data: 7 });
console.log(store.getState());
store.dispatch({ type: 'DELETE', data: 2 });
console.log(store.getState());
store.dispatch({ type: 'DELETE', data: 5 });
console.log(store.getState());
