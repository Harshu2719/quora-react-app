import React from 'react';
import { FaPeopleGroup } from "react-icons/fa6";
import '../HeaderComponent.css';
import { Link } from 'react-router-dom';

const SpacesComponent = () => {
  return (
    <div id='widthId'>
        <Link to='/spaces'> <FaPeopleGroup size={26} className='fillColor'/></Link>
    </div>
  )
}

export default SpacesComponent