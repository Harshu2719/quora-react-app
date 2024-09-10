import { useState } from 'react';
import AddQuestionModal from '../../Pages/AddQuestion/AddQuestionModal';
import './HeaderComponent.css';

function AddQuestionButton() {
  const [show, setShow] = useState(false); 
  const handleButton = ()=> {
    setShow(true);    
  }
  return (
    <>
    <button className='addQuestionStyle' onClick={handleButton}>Add Question</button>
    {(show)&&<AddQuestionModal show={show} setShow={setShow} />}
    </>
  )
  
}

export default AddQuestionButton;