import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SinglePostComponent from '../Layout/SideBar/MiddleFeedComponents/SinglePostComponent';
import '../Layout/SideBar/MiddleFeedComponents/FeedComponent.css';
import HeaderComponent from '../Layout/Header/HeaderComponent';

function QuestionComponent() {
    const [obj, setObj] = useState();
    const {key, value} = useParams();
    

    const reduxObj = useSelector(store => store.question.question) 
    useEffect(() => {
      setObj(reduxObj[value]);
    }, [value])
    
  return (
    <>
      <HeaderComponent />
      <div className='SearchHomePageStyle'>
          <SinglePostComponent obj={obj} index={value} />
      </div>
    </>
  )
}

export default QuestionComponent

/* const fetchquestionComment = async()=> {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${value}/comments`, {
        headers:  {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'projectID': 'f104bi07c490',
        }
      })
      const data = await response.json();
      console.log(data)
      setComments(data.data);
      // setQuestion(data.data)     
    }
    const fetchquestion = async()=> {
      const questionResponse = await fetch(`https://academics.newtonschool.co/api/v1/quora/post?search={"field":"${value}"}`, {
        headers:  {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'projectID': 'f104bi07c490',
        }
      })
      const questionData = await questionResponse.json();
      console.log(questionData) 
      setQuestionData(questionData.data)     
    }
    console.log(questionData, 'sdfafgadgadgadgadgafbvdghydbgn', comments)
    useEffect(()=> {
      fetchquestionComment();
      fetchquestion();
    },[value])*/