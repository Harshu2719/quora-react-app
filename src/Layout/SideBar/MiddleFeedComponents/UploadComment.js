import React, { useEffect, useState } from 'react'
import SeeAllComment from './SeeAllComment';
import { IoPersonCircleOutline } from 'react-icons/io5';
import './FeedComponent.css' ;
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../../../ReduxStore/CommentsSlice';
import { setQuestion } from '../../../ReduxStore/QuestionsSlice';

const UploadComment = ({obj}) => {
    const [comment, setComment] = useState();
    const dispatch = useDispatch();
    const allPosts = useSelector(store=>store.question.question);
   
    
    const handleInputComment = (event)=> {
        setComment(event.target.value);
    }
    const commentAPI = async() => {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${obj?._id}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'projectID': 'f104bi07c490'
            }, 
            body: JSON.stringify({
                'content': comment,
            })           
        })
        const data = await response.json();
        const author_details = {
            _id : data?.data?.author,
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email')
        }       
        const newObj = {...data?.data, author_details}
        delete newObj?.appType;
        console.log(newObj?.createdAt);
        const payload = {
            postId : obj?._id,
            comment: newObj
        }
        dispatch(addComments(payload));
        //allPosts?.commentCount ++;
        const updatedAllPosts = allPosts.map((obj)=> {
            if(obj?._id === newObj?.post) {
                const commentCount = obj.commentCount+1;
                return ({...obj, commentCount})
            }
            return obj;
        })
        dispatch(setQuestion(updatedAllPosts));
        console.log(allPosts);
    }
    const handleCommentAPICall = () => {
        commentAPI();
    }
    return (
        <div >
             <div className='uploadCommentBoxStyle'>
                <div className='commentBoxStyle'>
                    <Link className='commentProfileStyle'><IoPersonCircleOutline size={36} /></Link>
                    <input className='commentInputStyle' onChange={(e) => { handleInputComment(e) }} placeholder='Add your comment' />
                    <button className='commentButtonStyle' onClick={() => { handleCommentAPICall() }}>Add Comment</button>
                </div>
                <SeeAllComment obj={obj} setComment={setComment} handleCommentAPICall={handleCommentAPICall}/>
            </div>  
        </div>
    )
}

export default UploadComment; // 