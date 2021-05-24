import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer, { RootState } from "../reducers";

const devToolsCompose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers =
  devToolsCompose !== null && devToolsCompose !== undefined
    ? devToolsCompose
    : compose;

export type ThunkWithRootState = ThunkMiddleware<RootState, AnyAction>;

function reduxStore(initialState = {} as RootState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk as ThunkWithRootState))
  );

  return store;
}

export default reduxStore;
