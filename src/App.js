import React from "react";
//import logo from "./logo.svg";
import Visualizer from "./components/Visualizer";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <NavBar />
        <div className="mainapp">
          <Visualizer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
