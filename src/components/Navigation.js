import React, { useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { navDatas} from '../data/languages-data';
import LanguageContext from '../components/LanguageContext';


const Navigation = () => {
    
    const language = useContext(LanguageContext);
    
    return (
        
        <nav className="navigation">
            
            <NavLink to='/' exact  className="brand">NK</NavLink>
            
            <div className="navList">
                <span className="handFont">&lt;nav&gt;</span>
            
                <ul>
                    
                    {   
                        language.language === "Shakespeare" ? navDatas.menuEng.map( (data, i) =>{
                            return(
                            <NavLink to={data[1]} exact activeClassName='nav-active' key={data[1]} className="hover">
                                <li key={i} >
                                    {data[0].split('').map((letter, i )=>{
                                        return(
                                        <span data-letter={Math.floor(Math.random() * 5) + 1  } key={i}>{letter}</span>
                                        )
                                    })}
                                </li>
                            </NavLink>
                            )
                        }) : navDatas.menuFr.map( (data, i) =>{
                            return(
                            <NavLink to={data[1]} exact activeClassName='nav-active' key={data[1]} className="hover">
                                <li key={i} >
                                    {data[0].split('').map((letter, i )=>{
                                        return(
                                        <span data-letter={Math.floor(Math.random() * 5) + 1  } key={i}>{letter}</span>
                                        )
                                    })}
                                </li>
                            </NavLink>
                            )
                        })                    
                    }
                    
                </ul> 

                <span className="handFont">&lt;\nav&gt;</span>
            </div>
                
            <div className="location">
                <a href="https://www.strasbourg.eu/" className="hover" target="blank">Strasbourg</a>
                <p>France</p>
            </div>
            
        </nav>
    );
};

export default Navigation;