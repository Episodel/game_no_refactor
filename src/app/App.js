import React, { useState } from "react";
import "./app.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/home/Home";
import TeamWhite from "../components/teamWhite/TeamWhite";
import TeamBlack from "../components/teamBlack/TeamBlack";
import AppStyle from "./appStyle";

const App = () => {
  return (
    <Router>
      <AppStyle>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/white">
              <TeamWhite />
            </Route>
            <Route path="/black">
              <TeamBlack />
            </Route>
            <Route path="/admin">
              <Home />
            </Route>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </AppStyle>
    </Router>
  );
};

export default App;
