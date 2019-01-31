import React, { Component } from "react";
import Sidebar from "./Sidebar.js";
import Main from "./Main.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
