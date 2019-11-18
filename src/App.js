import React from "react";
import "./App.css";
import LangMenu from "./lang_menu";
import Words from "./words";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <LangMenu />
        </div>
      <div className="words">
        <Words />
      </div>

    <div className="bottomSection">

    </div>

    </div>
  );
}

export default App;
