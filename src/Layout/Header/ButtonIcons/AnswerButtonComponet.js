import React from 'react';
import { BsPencilSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';
import '../HeaderComponent.css';

const AnswerButtonComponent = () => {
  
  return (
    <div id='widthId'>
        <Link to={'/answer'}> <BsPencilSquare size={26} color='gray' /> </Link>
    </div>
  )
}

export default AnswerButtonComponent