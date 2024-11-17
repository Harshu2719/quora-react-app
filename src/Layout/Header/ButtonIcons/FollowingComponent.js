import React from 'react';
import { FaRegListAlt } from "react-icons/fa";
import '../HeaderComponent.css';
import { Link } from 'react-router-dom';

const FollowingComponent = () => {
  return (
    <div id='widthId'>
        <Link to={'/following'}><FaRegListAlt size={26} className='fillColor'/></Link>
    </div>
  )
}

export default FollowingComponent;