import React from "react";
import logo from "./logo.svg";
import ReduxCounter from "./components/ReduxCounter";
import ContextCounter from "./components/ContextCounter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReduxCounter />
        <ContextCounter />
      </header>
    </div>
  );
}

export default App;
