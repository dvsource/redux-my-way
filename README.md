# Building a Redux lib from Scratch in my way

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

## Playground

### Dependancies

- Lodash [source](https://github.com/lodash/lodash)

#### Install

```shell
yarn
```

#### Run

```shell
yarn play
```

## TODO

#### Basic

- [x] `createStore(reducer, [initialState], [enhancer]): Store`
- [x] `getState(): SState`
- [x] `dispatch(action): void`
- [x] `subscribe(listener): void`
- [x] `reducer(state, action): State`
- [x] `replaceReducer(reducer): void`

#### Adavanced

- [x] `combineReducers(...reducers | reducersObj)`
- [ ] `applyMiddleware(...middlewares)`
- [ ] `bindActionCreators(actionCreators, dispatch)`
- [ ] `compose(...functions)`
- [ ] `replaceReducer(nextReducer)`
