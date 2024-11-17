import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { removeComments } from '../../../ReduxStore/CommentsSlice';

const DeleteCommentComponent = ({object, deleteButtonClicked}) => {
    const dispatch = useDispatch();
    //console.log(object);
    
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