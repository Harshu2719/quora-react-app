import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeComments } from '../../../ReduxStore/CommentsSlice';

const DeleteCommentComponent = ({object, deleteButtonClicked}) => {
    const dispatch = useDispatch();
    console.log(object);
    const handleDeleteCommentAPI = async()=> {
        const ids = {
            postId :object?.post ,
            commentId : object?._id,
        }
        dispatch(removeComments(ids));
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${object?._id}`,{ 
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}` ,
                'projectID': 'f104bi07c490'
            
            }
        })
    }
    useEffect(()=> {
        handleDeleteCommentAPI();
        
    }, [deleteButtonClicked])
  return (
    <div onClick={()=> handleDeleteCommentAPI()}>
        delete
    </div>
  )
}

export default DeleteCommentComponent