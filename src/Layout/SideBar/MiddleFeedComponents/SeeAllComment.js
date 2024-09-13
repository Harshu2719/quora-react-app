import React, { useEffect, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5';
import DropdownComponent from './DropdownComponent';
import UploadComment from './UploadComment';
import SingleCommentComponent from './SingleCommentComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../../../ReduxStore/CommentsSlice';

const SeeAllComment = ({obj, setComment, handleCommentAPICall}) => {

    const [refreshComment, setRefreshComment] = useState(false);
    const dispatch = useDispatch()
    const commentsMap = useSelector(store => store.postComments.comments)
   
    const allCommentAPI = async()=> {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${obj?._id}/comments`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
               'projectID': 'f104bi07c490'
            }
        })
        const data = await response.json();
        console.log(data?.data);
        const payload = {
            id: obj?._id,
            comments: data?.data
        }
        dispatch(setComments(payload));
  
    }
    useEffect(()=> {
        allCommentAPI()
        console.log(refreshComment)
    }, [])

    console.log(commentsMap);
  return (
    <div>
        {commentsMap?.get(obj._id)?.map((comment) => {
            return (
                <>
                    <SingleCommentComponent object={comment} setComment={setComment} handleCommentAPICall={handleCommentAPICall} setRefreshComment={setRefreshComment} />
                </>
            )
        })}
    </div>
  )
}

export default SeeAllComment