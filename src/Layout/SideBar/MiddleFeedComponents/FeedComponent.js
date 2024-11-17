import React, { useState, useEffect } from 'react';
import './FeedComponent.css'
import AskQuestion from '../../Header/AskQuestion';
import AdvertiesmentComponent from '../RightSideComponent/AdvertiesmentComponent';
import { useDispatch, useSelector } from 'react-redux';
import { clearQuestions, setQuestion } from '../../../ReduxStore/QuestionsSlice';
import SinglePostComponent from './SinglePostComponent';

const FeedComponent = () => {
  const [feed, setFeed] = useState([]);
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false)
  const reduxFeed = useSelector(store => store.question.question)
  // //console.log(question);
  const fetchFeed = async () => {
    const response = await fetch('https://academics.newtonschool.co/api/v1/quora/post', {
      method: 'GET',
      headers: {
        'projectID': 'f104bi07c490',
      }
    })
    const data = await response.json();
    // //console.log(data)
    dispatch(setQuestion(data?.data));

  }

  // useEffect(() => {
  //       dispatch(setQuestion(feed))
  //       //console.log(reduxFeed);
  // }, [feed])

  useEffect(() => {
    fetchFeed()
    setRefresh(false);
  }, [refresh])


  //console.log(refresh);
  return (
    <>
      <div>
        <div><AskQuestion /></div>
        <div className='feed'>
          {reduxFeed?.map((obj, index) => {
            return (
              <>
                <SinglePostComponent obj={obj} index={index} setRefresh={setRefresh} />
              </>
            )
          })}
        </div>
      </div>

    </>

  )
}

export default FeedComponent;