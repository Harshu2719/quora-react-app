import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeComments } from '../../../ReduxStore/CommentsSlice';
import { setQuestion } from '../../../ReduxStore/QuestionsSlice';

function DropdownComponent({ object, isEditButtonClicked, setIsEditButtonClicked}) {
  const allPosts = useSelector(store => store.question.question);
  const dispatch= useDispatch();
  const handleEditButton = ()=> {
    setIsEditButtonClicked(!isEditButtonClicked);
  }
  const handleDeleteCommentAPI = async()=> {
    const ids = {
        postId :object?.post ,
        commentId : object?._id,
    }
    dispatch(removeComments(ids));
    const updatedAllPosts = allPosts.map((obj)=> {
      if(obj?._id === object?.post) {
          const commentCount = obj.commentCount-1;
          return ({...obj, commentCount})
      }
      return obj;
    })
    dispatch(setQuestion(updatedAllPosts));
    const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${object?._id}`,{ 
        method: 'DELETE',
        headers:{
            'Authorization': `Bearer ${localStorage.getItem('token')}` ,
            'projectID': 'f104bi07c490'       
        }
    })
  }
 
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));
  return (
    <Dropdown >
      <Dropdown.Toggle as={CustomToggle}  variant="success" id="dropdown-basic">
      <svg style={{paddingRight: '10px'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z" class="icon_svg-stroke" fill="#666" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item onClick={()=>handleEditButton()} >edit</Dropdown.Item> */}
        <Dropdown.Item  onClick={()=>handleDeleteCommentAPI()}>delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownComponent;