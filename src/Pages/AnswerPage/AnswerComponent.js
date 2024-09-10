import React from 'react'
import { useSelector } from 'react-redux';
import HeaderComponent from '../../Layout/Header/HeaderComponent';

const AnswerButtonComponent = () => {
    const question = useSelector(store => store.question.question);
    
  return (
    <>
    <HeaderComponent />
        <div>
            <h4>Comming Soon</h4>
        </div>
    </>
  )
}

export default AnswerButtonComponent;
/* {
        question.map((quest) => {
            return (
                <div>
                    {quest}
                </div>
            )
        })
    }
*/