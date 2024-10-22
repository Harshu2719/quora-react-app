import React, { useState } from 'react'
import { RxAvatar } from 'react-icons/rx'
import './AskQuestion.css';
import AddQuestionModal from '../../Pages/AddQuestion/AddQuestionModal';
import { TbMessageQuestion } from "react-icons/tb";
import { BsPencilSquare } from 'react-icons/bs';
import { GoPencil } from "react-icons/go";
import { IoPersonCircleOutline } from 'react-icons/io5';

const AskQuestion = () => {
  const [show, setShow] = useState(false); 
  const handleButton = ()=> {
    setShow(true);    
  }
  return (
    <>
    <div className='style1'>
        <div className='style2'>
            <IoPersonCircleOutline size={36} />                
          <div onClick={() => handleButton()} className='style2Input' >
            What do you want to ask or share?</div>
          </div>
        <div className='style3'>
            <button onClick={()=> handleButton()} className='style3Button'> <TbMessageQuestion /> Ask </button>
            <p style={{marginBottom: '0'}}>|</p>
            <button onClick={()=> handleButton()} className='style3Button'> <BsPencilSquare /> Answer</button>
            <p style={{marginBottom: '0'}}>|</p>
            <button onClick={()=> handleButton()} className='style3Button'> <GoPencil /> Post</button>
        </div>
    </div>
    {show && <AddQuestionModal show={show} setShow={setShow} />}
    </>
  )
}

export default AskQuestion;