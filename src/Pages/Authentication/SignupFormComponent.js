import React, {useState} from 'react';
import SignupComponent from './SignupComponent.js'
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, setUser, setToken, loginUser } from '../../ReduxStore/AuthSlice.js';
import './SignupComponent.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignupFormComponent = ({handleClose}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isItFailed, setIsItFailed] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const dispatch = useDispatch(); 

  const userName = (e)=> {
    setName(e.target.value)
  }
  const userEmail = (e)=> {
      setEmail(e.target.value)
  }
  const userPassword = (e)=> {
      setPassword(e.target.value)
  }

  const  authenticationSignup = async ()=> {
    try{
        const header = {
            'projectID': 'f104bi07c490',
            'Content-Type': 'application/json'
        };
        const userDetail = {
            name: name,
            email: email,
            password: password,
            appType: 'quora',
        };
        const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({...userDetail})   
        })
            const data = await response.json();
            //console.log(data?.status)
        if(data?.status === 'fail') {
            setIsItFailed(true)
            setResponseMessage(data?.message)
          
        } else {
            localStorage.setItem('token', data?.token) 
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('name',data?.data?.user?.name);
            localStorage.setItem('email',data?.data?.user?.email);
            localStorage.setItem('projectId', 'f104bi07c490');
            dispatch(setToken(data.token));
            dispatch(setUser(userDetail));
            dispatch(authenticateUser(true))
            handleClose()      
        }
    } catch {
        alert('Not responding server')
    }
  }
  const style = {
    border: '1px solid black',
    width: '100%',
    height: '40px',
    marginBottom: '20px',
    borderRadius: '4px',
}

  return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} onChange={userName} type="text" placeholder="What would like to be called?" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={userEmail} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  value={password} onChange={userPassword} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={()=> authenticationSignup()} variant="primary" type="button">
        Next
      </Button>
    </Form>
      {isItFailed && <Alert severity="error">{responseMessage}</Alert>}
  </>
  )
}

export default SignupFormComponent;
/*<form>
          <labal>Name</labal>
          <input
            className='inputStyle'
            style={style}
            type="text"
            id="name"
            value={name}
            onChange={userName}
            placeholder="What would you like to be called ?"
          />
          <br />
          <labal>Email</labal>
          <input
            className='inputStyle'
            style={style}
            type="email"
            id="name"
            value={email}
            onChange={userEmail}
            placeholder="Your email"
          />
          <br />
          <labal>Password</labal>
          <input
            className='inputStyle'
            style={style}
            type="password"
            id="password"
            value={password}
            onChange={userPassword}
            placeholder="Your password"
          />
          <br />
            <button className='nextButtonStyle'
              style={{ ...style, backgroundColor: "#2e69ff", color: 'white',}}
              type="button"
              onClick={()=> {authenticationSignup()}}
            >
              Next
            </button>
        </form> */