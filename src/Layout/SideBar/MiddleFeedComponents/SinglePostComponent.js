import React, { useState } from 'react'
import UploadComment from './UploadComment';
import CommentPost from './CommentPost';
import FeedPostComponent from './FeedPostComponent';
import LikeDisLikeComponent from './LikeDisLikeComponent';
import './FeedComponent.css';


const SinglePostComponent = ({ obj, index, setRefresh}) => {
  const [isCommentButtonClicked, setIsCommentButtonClicked] = useState(false);
  console.log(obj);
  return (
    <div className='feeddiv'>
      <FeedPostComponent obj={obj} index={index} setRefresh={setRefresh}/>  
      <div className='LikeCommentStyle' >
        <LikeDisLikeComponent obj={obj} />
        <CommentPost obj={obj} isCommentButtonClicked={isCommentButtonClicked} setIsCommentButtonClicked={setIsCommentButtonClicked} />       
      </div>
      {isCommentButtonClicked && <UploadComment obj={obj} />}
    </div>
  )
}

export default SinglePostComponent;