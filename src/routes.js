import React from "react";
import { Route } from "react-router";

import App from "./App";
import TLListContainer from "./components/tier-lists/list-view/TLListContainer";

export default (
  <Route path="/" component={App}>
    <Route path="tier-lists/:list_type_id" component={TLListContainer} />
  </Route>
);
