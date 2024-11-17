import React from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../HeaderComponent.css';

const AnswerButtonComponent = () => {
  
  return (
    <div id='widthId'>
        <Link to={'/answer'} > <BsPencilSquare className='fillColor' size={26} /></Link>
    </div>
  )
}

export default AnswerButtonComponent