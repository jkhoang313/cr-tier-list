import React from "react";
import { Route } from "react-router";

import App from "./App";
import TLListContainer from "./components/tier-lists/list-view/TLListContainer";

export default (
  <App>
    <Route path="/tier-lists" component={TLListContainer} />
  </App>
);
