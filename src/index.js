import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import createHistory from "history/createBrowserHistory";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from "react-router-redux";

import rootReducer from "./redux/reducers.js";
import routes from "./routes";

import "./stylesheets/sass/main.css";

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...rootReducer,
    router: routerReducer
  }),
  process.env.REACT_APP_DISABLE_REDUX_DEV_TOOLS
    ? applyMiddleware(thunk, middleware)
    : composeWithDevTools(applyMiddleware(thunk, middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>{routes}</ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
