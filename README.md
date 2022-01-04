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

```shell
yarn play
```

## TODO

#### Basic

- `[~] createStore(reducer, [initialState], [enhancer]): Store`
- `[x] getState(): SState`
- `[X] dispatch(action): void`
- `[X] subscribe(listener): void`
- `[X] reducer(state, action): State`

#### Adavanced

- `[~] combineReducers(...reducers)`
- `[ ] applyMiddleware(...middlewares)`
- `[ ] bindActionCreators(actionCreators, dispatch)`
- `[ ] compose(...functions)`
- `[ ] replaceReducer(nextReducer)`
