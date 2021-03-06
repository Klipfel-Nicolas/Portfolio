import React, { useContext, useEffect } from 'react';
import LanguageContext from '../components/LanguageContext';

const ParametresBanner = () => {
    
    useEffect(() => { 
        Array.from(document.querySelectorAll('.languages label')).map(label =>{
            if(label.id === language.language){
                return label.classList.add('lang-active')
            }
            return null;
        })
      });


    //LANGUAGE _____

    const language = useContext(LanguageContext);

    const onChangeLanguage = e=>{
        language.updateLanguage(e.target.value);
        
        Array.from(document.querySelectorAll('.languages label')).map(label =>{
            if(label.id !== language.language){
                return label.classList.add('lang-active')
            }else{
                return label.classList.remove('lang-active');
            }
        })
   
    }

    // RENDER ____________

    return (
        <header className="parametresBanner grid">
            <h1>{language.language === "Shakespeare" ? `< Front-end developer />` : `< Developpeur front-end />` }</h1>
            <div className="languages" onChange={onChangeLanguage}>
                <p>lang: </p>
                <label 
                    htmlFor="Moliere" 
                    id="Moliere" 
                    className="hover"
                >Moliere
                    <input type="radio" name="language" value="Moliere" />
                </label>
                
                <label 
                    htmlFor="Shakespeare" 
                    id="Shakespeare" 
                    className="hover "     
                >Shakespeare
                    <input type="radio" name="language" value="Shakespeare" />
                </label>
            </div>
        </header>
    );
};

export default ParametresBanner;