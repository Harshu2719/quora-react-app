import React from 'react';
import { SlGlobe } from "react-icons/sl";
import '../HeaderComponent.css';
import { Link } from 'react-router-dom';

const LanguageComponent = () => {
  return (
    <div id='widthId'>
        <Link to={'/Language'}><SlGlobe size={26} className='fillColor' /></Link>
    </div>
  )
}

export default LanguageComponent