const _ = require('lodash');

const combineReducers = (...reducers) => {
  if (_.isObject(reducers[0])) {
    const reducersObj = reducers[0];
    return (state = {}, action) => {
      _.forOwn(reducersObj, (reducer, key) => {
        state[key] = reducer(state[key], action);
      });
      return state;
    };
  } else {
    return (state = {}, action) => {
      reducers.forEach((reducerFn) => {
        state = reducerFn(state, action);
      });
      return state;
    };
  }
};

module.exports = combineReducers;
