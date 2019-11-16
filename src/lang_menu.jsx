import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function LangMenu() {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (<div>
<nav>
<button onClick={()=>handleClick('en')} >
  English
</button>
<button onClick={()=>handleClick('es')} >
  Spanish
</button>
<button onClick={()=>handleClick('fr')} >
  French
</button>
<button onClick={()=>handleClick('cz')} >
  Czech
</button>
</nav>
  </div>);
};


