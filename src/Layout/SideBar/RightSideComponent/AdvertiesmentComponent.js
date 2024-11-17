import React from 'react'
import './Advertiesment.css';

const AdvertiesmentComponent = () => {
  return (
    <div className='advertiesment'>
      <div className='advertiesmentImage'>
        <img className='advertiesmentImage' style={{display: 'flex',justifyContent:'center', width: '80%', height: '300px'}} src='https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/6465e02918f7e6ec543e303e_indianexpress.-technology_newton%20school.jpg' />
      </div>        
      <div className='addvertiesmentName'>
        Advertiesment
      </div>
    </div>
  )
}

export default AdvertiesmentComponent