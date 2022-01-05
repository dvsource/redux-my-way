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

const reducer3 = (state = [], action) => {
  const actionsMap = new Map([
    [
      'ADD',
      (state, data) => {
        state.push(data);
      },
    ],
    [
      'DELETE',
      (state, data) => {
        state.splice(
          state.findIndex((i) => i === data),
          1
        );
      },
    ],
    [
      'REPLACE',
      (state, data) => {
        state[state.findIndex((i) => i === data.old)] = data.new;
      },
    ],
  ]);
  actionsMap.get(action.type)(state, action.data);
  return state;
};

const combineReducer = combineReducers(reducer1, reducer2);
const store = creteStore(combineReducer, [1, 2, 3]);

console.log(store.getState());
store.dispatch({ type: 'ADD', data: 5 });
console.log(store.getState());
store.dispatch({ type: 'ADD', data: 7 });
console.log(store.getState());
store.dispatch({ type: 'DELETE', data: 2 });
console.log(store.getState());
store.dispatch({ type: 'DELETE', data: 5 });
console.log(store.getState());

store.replaceReducer(reducer3);
store.dispatch({ type: 'ADD', data: 11 });
store.dispatch({ type: 'ADD', data: 12 });
store.dispatch({ type: 'DELETE', data: 1 });
console.log(store.getState());
store.dispatch({ type: 'REPLACE', data: { old: 7, new: 10 } });
console.log(store.getState());
