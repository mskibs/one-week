import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LangMenu from './lang_menu';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      
        <header className="App-header">
        <LangMenu />
          <p>
          </p>
        </header>
        <h3>{t("chorus1")}</h3>  

    </div>
  );
}

export default App;