import React, { useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import DropdownComponent from './DropdownComponent';
import './FeedComponent.css';
import LikeDisLikeComponent from './LikeDisLikeComponent';

const SingleCommentComponent = ({object, setComment, handleCommentAPICall, setRefreshComment}) => {
    console.log(object);
    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
    const handleEditedComment = (e) => {
        handleCommentAPICall();
        //setIsEditButtonClicked(false)
    }
  return (
    <div>
        <div style={{display:'flex', paddingLeft: '7px'}}>
            <div >
                <IoPersonCircleOutline size={36} />                            
            </div>
            <div style={{width: '90%'}}>
                    <div style={{display: 'flex'}}>
                        <div className='userNameStyle'>{object?.author_details?.name}•</div>
                        <div className='userNameStyleDate' >{object?.author_details?.createdAt}</div>  
                    </div>
                    <div>
                        {isEditButtonClicked ? 
                        <>
                            <input className='commentInputStyle' onChange={(e)=> setComment(e.target.value)} placeholder='edit your comment' /> 
                            <button className='commentButtonStyle' onClick={()=> handleEditedComment()}>Update</button>
                        </>
                        : <p className='contentText'>{object?.content}</p>}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <LikeDisLikeComponent obj={object} /> 
                        { <DropdownComponent object={object} isEditButtonClicked={isEditButtonClicked} setIsEditButtonClicked={setIsEditButtonClicked} setRefreshComment={setRefreshComment}  /> }
                    </div> 
            </div>
        </div>
    </div>
  )
}

export default SingleCommentComponent
// 