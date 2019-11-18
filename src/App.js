import React from "react";
import "./App.css";
import LangMenu from "./lang_menu";
import Words from "./words";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';

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

<a className="github" href="https://github.com/mskibs/one-week" target="blank"><FontAwesomeIcon icon={faCode} /></a>
   
    </div>

    </div>
  );
}

export default App;
