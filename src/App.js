import React, { useEffect, useState } from 'react'
import RoutingComponent from './RoutingComponent'
import { useSelector } from 'react-redux';
import './dusktheme.css';
import './daytheme.css';

const App = () => {
    const [localStorageTheme, setLocalStorageTheme] = useState(false)
    const theme = useSelector(store => store.themes);
    // //console.log(theme);
    const [themeClass, setThemeClass] = useState('day');
  
    useEffect(() => {
      // Dynamically load the CSS based on the theme
      const loadTheme = async () => {
        if (theme.theme) {
          setThemeClass('dusk');
          document.body.setAttribute('data-bs-theme',"dark")
          localStorage.setItem('theme', true);
        } else {
          setThemeClass('day');
          document.body.setAttribute('data-bs-theme',"day")
          localStorage.setItem('theme', false);
        }
      };
      
      loadTheme();
    }, [theme.theme]); 
  return (
    <div className={themeClass} >
        <RoutingComponent /> 
    </div>
  )
}

export default App