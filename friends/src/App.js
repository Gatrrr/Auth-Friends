import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login.js";
import MyFriends from "./components/MyFriends.js";
import PrivateRoute from "./components/PrivateRoute.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/protected">Friends</Link>
        </div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
          <PrivateRoute exact path="/protected" component={MyFriends} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
