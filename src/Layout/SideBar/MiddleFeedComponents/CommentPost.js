import React, { useEffect, useState } from 'react'
import './FeedComponent.css';
import { FaRegComment } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CommentPost = ({obj, isCommentButtonClicked, setIsCommentButtonClicked}) => {
    const [commentCount, setCommentCount] = useState();
    const comments = useSelector(store => store.postComments.comments);
    const {key, value} = useParams();
    console.log(key,'ewfrwefwgw4gfsdsrrheteh', value);
    const handleShowComment = ()=> {
      if(key !== 'id') {
        setIsCommentButtonClicked(!isCommentButtonClicked);
      }
        
    }
    
    useEffect(()=> {
      setCommentCount(comments.get(obj?._id)?.length)
      if(key === 'id') {
        setIsCommentButtonClicked(true);
      }
    },[])
    //console.log(comments.get(obj?._id)?.length);
  return (
    <div>
        <div className='commentStyle'>
            <button className='likeDislikeCommentButtonStyle' onClick={()=> handleShowComment()}><FaRegComment /></button>
            <p className='paraStyle'>{obj?.commentCount}</p>
        </div>        
    </div>
  )
}

export default CommentPost;