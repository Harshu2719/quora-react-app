import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddQuestionModal.css';
import { IoPersonCircleOutline } from 'react-icons/io5';
import UploadWrittenPost from './UploadWrittenPost';


function AddQuestionModal({show, setShow}) {

  const [post, setPost] = useState()
  const [title, setTitle] = useState();
  
  const storePost=(e)=> {
    setPost(e.target.value);
  }
  const handleTitle=(e) => {
    setTitle(e.target.value);
  }
    const callUploadPostAPI = async()=> {
        const formData = new FormData();
        formData.append('title',title);
        formData.append('content',post);
        const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post/', {   
            method: 'POST',
            headers: {
                  'Authorization': `Bearer ${localStorage.getItem('token')}`,
                  'projectID': `${localStorage.getItem('projectId')}`,
                 
               },
              body: formData,
              redirect: "follow"
           })

        // const myHeaders = new Headers();
        // myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGE5Y2M4ZmJjZDkxNTU3OWFlNmI4OCIsImlhdCI6MTcyMDM2NTgzNSwiZXhwIjoxNzUxOTAxODM1fQ.D0hZ8uHyhTgzULts6k_HrKWVOYDMI41SMGRlT79KVbc");
        // myHeaders.append("projectID", `${localStorage.getItem('projectId')}`);

        // const formdata = new FormData();
        // formdata.append("title", title);
        // formdata.append("content", post);

        // const requestOptions = {
        //   method: "POST",
        //   headers: myHeaders,
        //   body: formdata,
        //   redirect: "follow"
        // };

        // await fetch("https://academics.newtonschool.co/api/v1/quora/post/", requestOptions)

    }
  const handleUploadPost = ()=> {
    handleClose();   
    callUploadPostAPI();
  }
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal className='modalContent' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h4 className='createPostButton'>Create Post</h4>
        </Modal.Header>
        <Modal.Body>
          <div className='modalStyle1'>
            
            {/* <div className='underlineStyle'></div> */}
          </div>
          <div className='modalStyle2'>
            <IoPersonCircleOutline size={36} />
            <select className='optionStyle' name="cars" id="cars">
              <option className='optionStyle' value="Public">Public</option>
              <option className='optionStyle' value="Limited">Limited</option>
            </select>
          </div>
          <input className='inputTitleStyle' onChange={(e)=> handleTitle(e)} placeholder='Title for the post'></input>
          <textarea  onChange={(e)=> storePost(e)} className='modalStyle3' placeholder='Start writing about your post....'></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={()=> handleUploadPost()}>
            Add Question
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
}

export default AddQuestionModal;
// Start your question with &quot;What&quot;, &quot;How&quot;, &quot;Why&quot;, etc.