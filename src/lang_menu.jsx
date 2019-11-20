import React from "react";
import i18next from "i18next";

export default function LangMenu(props) {
  function handleClick(language) {
    i18next.changeLanguage(language);
  }
  return (
    <div {...props}>
      <nav style={{ width: "100%", padding: "2rem 0" }}>
        <button onClick={() => handleClick("en")}>English</button>
        <button onClick={() => handleClick("es")}>Spanish</button>
        <button onClick={() => handleClick("cs")}>Czech</button>
        <button onClick={() => handleClick("fr")}>French</button>
        <button onClick={() => handleClick("hr")}>Croatian</button>
      </nav>
    </div>
  );
}
