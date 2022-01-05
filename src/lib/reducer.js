const combineReducers = (...reducers) => {
  return (state = {}, action) => {
    reducers.forEach((reducerFn) => {
      state = reducerFn(state, action);
    });
    return state;
  };
};

module.exports = combineReducers;
