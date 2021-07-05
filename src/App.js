import React from "react";
import Home from "./pages/Home";
import 'assets/fonts/stylesheet.css';
import 'assets/css/custom.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
