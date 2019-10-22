
import React from "react";
//import logo from "./logo.svg";
import Visualizer from "./components/Visualizer";
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="mainapp">
        <Visualizer />
      </div>
    </React.Fragment>

  );
}

export default App;
