import React, { useEffect, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import './SearchResultPage.css';
import NoResultFound from './NoResultFound';
import HeaderComponent from '../Layout/Header/HeaderComponent';
import { useSelector } from 'react-redux';
import FeedComponent from '../Layout/SideBar/MiddleFeedComponents/FeedComponent';
import FeedPostComponent from '../Layout/SideBar/MiddleFeedComponents/FeedPostComponent';
import '../Layout/SideBar/MiddleFeedComponents/FeedComponent.css';
import SinglePostComponent from '../Layout/SideBar/MiddleFeedComponents/SinglePostComponent';

const SearchResultPage = () => {
    const {key, value} = useParams()
    const [searchResultArray, setSearchResultArray] = useState();
    
   
    console.log(key, value);

    const  searchResult = async ()=> {
        try{
            const header = {
              'projectID': "f104bi07c490",
              "Content-Type": "application/json"
            };
            const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post?search={"title":"${value}","content":"${value}"}`, {
                method: 'GET', 
                headers: header,
            })
            if(response.ok) {
              const data = await response.json();
              setSearchResultArray(data?.data);
              console.log(data);
              
            } else{
               
            }

        } catch (e) {
            console.log(e);
            alert('Not responding server')
        }
    }
    console.log(searchResultArray?.length);
    useEffect(()=>{
        searchResult();     
    }, [value])

  return (
    <>
      <HeaderComponent />
      <div className='SearchHomePageStyle'>
          {(searchResultArray?.length===0) ? <NoResultFound /> :
          (searchResultArray?.map(obj => {
            return (
              <div >
                <SinglePostComponent obj={obj} />                   
              </div>
              )
          }))}
      </div>
    </>
  )
}

export default SearchResultPage;

/* <div className='feeddivearch'>
                  //   <div className='searchedNameImageDiv'>
                  //     <div className='userImage'>
                  //       {(obj?.author?.profileImage) ? <img src={obj?.author?.profileImage} /> : <IoPersonCircleOutline size={50}/>} 
                  //     </div>
                  //     <div>
                  //       <h4>{obj?.author?.name}</h4>
                  //     </div>
                  //   </div>
                  //   <div>
                  //     <Link className='questionstyle' to={`/question/id/${obj._id}`}>{obj?.title}</Link>
                  //     {console.log(`/question/id/${obj._id}`)}
                  //     <p className='contentTextSearch'>{obj?.content}</p>
                  //   </div>
                  //   <div className='contentImagedivSearch'>
                  //     <img className='contentImage' src={obj?.images[0]}/>
                  //   </div>
                  //   <div></div>
                  // </div> */