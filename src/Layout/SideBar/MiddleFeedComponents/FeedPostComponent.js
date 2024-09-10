import React from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import './FeedComponent.css'
import DeletePostComponent from './DeletePostComponent'

const FeedPostComponent = ({obj , index, setRefresh}) => {
  return (
    <div>
        <div className='nameImageDiv'>
            <div style={{display: 'flex' , alignItems: 'center', }}>
                <div className='userImage'>
                    {(obj?.author?.profileImage) ? <img  src={obj?.author?.profileImage} /> : <IoPersonCircleOutline size={36}/>} 
                </div>
                <div className='userNameStyle'>
                    {obj?.author?.name}
                </div>
            </div>
            <div>
                {<DeletePostComponent obj={obj} setRefresh={setRefresh}/>}
            </div>
        </div>
        <div className='titleContentStyle'>
            <Link className='questionstyle' to={`/question/id/${index}`}>{obj?.title}</Link>
            <p  className='contentText'>{obj?.content}</p>
        </div>
            <div className='contentImagediv'>
            <img className='contentImage' src={obj?.images[0]}/>
        </div>
    </div>
  )
}

export default FeedPostComponent;