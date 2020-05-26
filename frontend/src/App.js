import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SingUp";
import NavBar from "./components/NavBar";
import Chat from "./components/Chat";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Chat} />
        </Switch>
      </>
    );
  }
}

export default App;
