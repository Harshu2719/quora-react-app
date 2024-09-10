import React from 'react'
import './FeedComponent.css';
import { FaRegComment } from 'react-icons/fa';

const CommentPost = ({obj, isCommentButtonClicked, setIsCommentButtonClicked}) => {
    
    
    const handleShowComment = ()=> {
        setIsCommentButtonClicked(!isCommentButtonClicked);
        console.log(isCommentButtonClicked);
    }
  return (
    <div>
        <div className='commentStyle'>
            <button className='likeDislikeCommentButtonStyle' onClick={()=> handleShowComment()}><FaRegComment /></button>
            <p style={{margin: '0'}}>{obj?.commentCount}</p>
        </div>        
    </div>
  )
}

export default CommentPost;