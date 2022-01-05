const creteStore = require('./lib/store');
const combineReducers = require('./lib/reducer');

// Playground
const names = (state = [], action) => {
  const actionsMap = new Map([
    ['ADD_STUDENT', (state, data) => state.push(data)],
    [
      'REMOVE_STUDENT',
      (state, data) =>
        state.splice(
          state.findIndex((i) => i === data),
          1
        ),
    ],
  ]);
  if (actionsMap.has(action.type)) {
    actionsMap.get(action.type)(state, action.data);
  }
  return state;
};

const counter = (state, action) => {
  const actionsMap = new Map([
    ['INCREMENT', (state) => state + 1],
    ['DECREMENT', (state) => state - 1],
  ]);
  if (actionsMap.has(action.type)) {
    return actionsMap.get(action.type)(state);
  }
  return state;
};

const combineReducer = combineReducers({ names, counter });
const studentsStore = creteStore(combineReducer, {
  names: ['Amal', 'Kamal'],
  counter: 2,
});

const addStudent = (name) => {
  studentsStore.dispatch({ type: 'ADD_STUDENT', data: name });
  studentsStore.dispatch({ type: 'INCREMENT' });
};

const removeStudent = (name) => {
  studentsStore.dispatch({ type: 'REMOVE_STUDENT', data: name });
  studentsStore.dispatch({ type: 'DECREMENT' });
};

console.log(studentsStore.getState());
addStudent('Nimal');
console.log(studentsStore.getState());
addStudent('Sunil');
console.log(studentsStore.getState());
removeStudent('Kamal');
console.log(studentsStore.getState());
