import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      {/* Header */}

      <Router>
        {/* Header always gets rendered */}
        <Header />
        <Switch>
          <Route path="/chat">
            <h1>I am a chatpage</h1>
          </Route>

          {/* Default route always placed at bottom */}
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>

      {/* Tinder Cards */}

      {/* Buttons below the Tinder Cards */}

      {/* Chats Screen */}
      {/* Individual Chat screen */}
    </div>
  );
}

export default App;
