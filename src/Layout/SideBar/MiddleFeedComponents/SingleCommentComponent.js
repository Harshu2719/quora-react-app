import React, { useEffect, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import DropdownComponent from './DropdownComponent';
import './FeedComponent.css';
import LikeDisLikeComponent from './LikeDisLikeComponent';

const SingleCommentComponent = ({object, setComment, handleCommentAPICall}) => {
    const [timeOfComment, setTimeOfComment] = useState();

    const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);
    
    const handleEditedComment = (e) => {
        handleCommentAPICall();
        //setIsEditButtonClicked(false)

    }
    useEffect(()=> {
        const newDate = new Date(object?.createdAt);
        const dateCount = newDate.toLocaleString('default',{day: '2-digit'});
        const month = newDate.toLocaleString('default',{ month: 'short' });
        setTimeOfComment(dateCount+'\xa0' + month);
    }, [])
  return (
    <div>
        <div style={{display:'flex', paddingLeft: '7px'}}>
            <div >
                <IoPersonCircleOutline size={36} />                            
            </div>
            <div style={{width: '90%'}}>
                    <div style={{display: 'flex'}}>
                        <div className='userNameStyle'>{object?.author_details?.name}</div>
                        <div className='userNameStyleDate' >•{timeOfComment}</div>  
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
                        {/* <LikeDisLikeComponent obj={object} />  */}
                        
                    </div> 
            </div>
            <div>
                {(localStorage.getItem('email') === object?.author_details?.email) &&  <DropdownComponent object={object} isEditButtonClicked={isEditButtonClicked} setIsEditButtonClicked={setIsEditButtonClicked}   /> }
            </div>
        </div>
    </div>
  )
}

export default SingleCommentComponent
// 