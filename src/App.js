import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/";
import * as Routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
