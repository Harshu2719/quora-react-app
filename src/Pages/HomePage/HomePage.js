import React, { useEffect } from 'react'
import FeedComponent from '../../Layout/SideBar/MiddleFeedComponents/FeedComponent';
import SideBarComponent from '../../Layout/SideBar/LeftSideComponent/SideBarComponent';


import './HomePage.css';
// import '../../dusktheme.css';
import AdvertiesmentComponent from '../../Layout/SideBar/RightSideComponent/AdvertiesmentComponent';
import Modal from '../../Layout/SideBar/LeftSideComponent/Modal';
import { useSelector } from 'react-redux';

const HomePage = () => {
 


  return (
    <div className='homeStyle'>
        <div className='homePageStyle'>
          <div className='leftSideStyle' ><Modal /></div>
          <div className='middleStyle' ><FeedComponent /></div>
          <div className='rightSideStyle'><AdvertiesmentComponent /></div>
        </div>
    </div>
  )
}

export default HomePage;