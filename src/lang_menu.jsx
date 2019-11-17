import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function LangMenu() {
   
    const { t } = useTranslation();

    function handleClick(language) {
      i18next.changeLanguage(language);
    }
    return (
<div>
<nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('es')} >
            Spanish
          </button>
          <button onClick={()=>handleClick('cz')} >
            Czech
         </button>
         <button onClick={()=>handleClick('fr')} >
            French
         </button>
         <button onClick={()=>handleClick('hr')} >
            Croatian
         </button>
        </nav>
</div>
    );

};


