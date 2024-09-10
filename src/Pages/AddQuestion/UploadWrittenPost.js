import React from 'react'

const UploadWrittenPost = ({post}) => {
    const callUploadPostAPI = async()=> {
        const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post/', {   
            method: 'POST',
            headers: {
                   'Authorization': 'Bearer YOUR_JWT_TOKEN',
                  'projectID': 'YOUR_PROJECT_ID'
               },
              body: {
                 'title': 'postTitle',
                 'content': 'postContent',
                 'images': 'postImage',
              }
           })
    }
  return (
    <div>
        
    </div>
  )
}

export default UploadWrittenPost