import React from 'react'
import { RxCross2 } from 'react-icons/rx';
import './FeedComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion } from '../../../ReduxStore/QuestionsSlice';


const DeletePostComponent = ({obj, setRefresh}) => {
    const list = useSelector(store => store.question.question)
    const dispatch = useDispatch();
    const handleRemovePost = (id) => {
        const newList = list.filter((obj)=> obj._id != id ); 
        console.log(newList);
        dispatch(setQuestion(newList))            
    }
    
    return (
        <div >
            <button className='deletePostButtonStyle' onClick={() =>  handleRemovePost(obj?._id)}> <RxCross2 /></button>
        </div>
    )
}

export default DeletePostComponent;

/*  const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${obj?._id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'projectID': 'f104bi07c490'
            }
        })*/