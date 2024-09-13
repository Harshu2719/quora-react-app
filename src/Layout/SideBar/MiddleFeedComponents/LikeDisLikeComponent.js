import React, { useEffect, useState } from 'react'
import { BiDownvote, BiUpvote } from 'react-icons/bi';
import './FeedComponent.css';

const LikeDisLikeComponent = ({obj}) => {
    const [likeCount, setLikeCount] = useState(obj?.likeCount);
    const [dislikeCount, setDislikeCount] = useState(obj?.dislikeCount);
    const [isLikeClicked, setIsLikeClicked] = useState();
    const [isDisLikeClicked, setIsDisIsLikeClicked] = useState();
    
    useEffect(()=> {
        //console.log(obj?.isLiked,'sdfgehsdfgbdf',obj?.isDisliked, obj)
        setIsLikeClicked(obj?.isLiked);
        setIsDisIsLikeClicked(obj?.isDisliked);
    },[])

    const handleLikeDislikeAPICall = async(obj, isLike, e) => {
        console.log(e);
        console.log(localStorage.getItem('token'));
        //e.currentTarget.disabled = true;
        if(isLike) {
            setIsLikeClicked(true)
            setIsDisIsLikeClicked(false)
            if(dislikeCount !== 0) {
                //Object.defineProperty(obj, "dislikeCount", {value: dislikeCount-1})
                setDislikeCount(dislikeCount-1);
            }
            setLikeCount(likeCount+1)
            //Object.defineProperty(obj, "likeCount", {value: likeCount+1})           
        }else {
            setIsLikeClicked(false)
            setIsDisIsLikeClicked(true)
            if(likeCount !== 0) {
                // obj?.likeCount--;
                //Object.defineProperty(obj, "likeCount", {value: likeCount-1})
                setLikeCount(likeCount-1);
            }
            setDislikeCount(dislikeCount+1)
            //Object.defineProperty(obj, "dislikeCount", {value: dislikeCount+1})
            // obj?.dislikeCount++;
        }
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/like/${obj?._id}`, {
            method: isLike ? 'POST' : 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
               'projectID': 'f104bi07c490'
            }            
        })
    }
    //console.log(isLikeClicked, "444444444444444444444444444444444444444444444", isDisLikeClicked);
  return (
    <div className='contentfooterStyle'>
        <div className='likeDislikeStyle'>
            <button disabled={isLikeClicked} onClick={(e)=> handleLikeDislikeAPICall(obj, true, e)} className='likeDislikeCommentButtonStyle'><BiUpvote color='black'/></button>
            <div className='upvoteBorderStyle'><p>upvote.{likeCount}</p></div>
            <button disabled={isDisLikeClicked} onClick={(e)=> handleLikeDislikeAPICall(obj, false, e)} className='likeDislikeCommentButtonStyle'><BiDownvote color='black'/></button>
            <div ><p>{dislikeCount}</p></div>
        </div>        
    </div>
  )
}

export default LikeDisLikeComponent