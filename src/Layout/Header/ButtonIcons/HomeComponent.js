import React, { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import '../HeaderComponent.css';

const HomeComponent = () => {
  // const [color, setColor] = useState('gray');
  // const handleClick = ()=> {
  //   setColor('red');
  // }
  return (
    <div id='widthId' >
      <Link to={'/home'}><FaHouse size={26} color='gray'/></Link>
    </div>
  )
}

export default HomeComponent;