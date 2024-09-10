import React, { useEffect } from 'react'

const DeleteCommentComponent = ({object, deleteButtonClicked, setRefreshComment}) => {
    console.log(object);
    const handleDeleteCommentAPI = async()=> {
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
        setRefreshComment(true)
    }, [deleteButtonClicked])
  return (
    <div>
        delete
    </div>
  )
}

export default DeleteCommentComponent