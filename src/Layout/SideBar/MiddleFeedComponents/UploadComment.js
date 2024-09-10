import React, { useEffect, useState } from 'react'
import SeeAllComment from './SeeAllComment';
import { IoPersonCircleOutline } from 'react-icons/io5';
import './FeedComponent.css' ;
import { Link } from 'react-router-dom';

const UploadComment = ({obj}) => {
    const [comment, setComment] = useState();
   
    
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

export default UploadComment;