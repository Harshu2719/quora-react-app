import React, { useEffect, useState } from 'react'
import './FeedComponent.css';
import { FaRegComment } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const CommentPost = ({obj, isCommentButtonClicked, setIsCommentButtonClicked}) => {
    const [commentCount, setCommentCount] = useState();
    const comments = useSelector(store => store.postComments.comments);
    const handleShowComment = ()=> {
        setIsCommentButtonClicked(!isCommentButtonClicked);
    }
    useEffect(()=> {
      setCommentCount(comments.get(obj?._id)?.length)
    },[])
    //console.log(comments.get(obj?._id)?.length);
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