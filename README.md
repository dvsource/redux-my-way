# Build Redux lib from Scratch in my way

### From the original API

#### Top-Level Exports​

- `createStore(reducer, [preloadedState], [enhancer])`
- `combineReducers(reducers)`
- `applyMiddleware(...middlewares)`
- `bindActionCreators(actionCreators, dispatch)`
- `compose(...functions)`

#### Store API

- <strong>State</strong>
  - `getState()`
  - `dispatch(action)`
  - `subscribe(listener)`
  - `replaceReducer(nextReducer)`

## TODO

#### Basic

- [-] `createStore(reducer, [preloadedState], [enhancer])`
- [-] `getState()`
- [-] `dispatch(action)`
- [-] `subscribe(listener)`

#### Adavanced

- [-] `combineReducers(reducers)`
- [-] `applyMiddleware(...middlewares)`
- [-] `bindActionCreators(actionCreators, dispatch)`
- [-] `compose(...functions)`
- [-] `replaceReducer(nextReducer)`

### Dependancies

- Lodash (source)[https://github.com/lodash/lodash]
