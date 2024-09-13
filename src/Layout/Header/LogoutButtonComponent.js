import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../../ReduxStore/AuthSlice.js';
import './HeaderComponent.css';


const LogoutButtonComponent = () => {
    const isAuth = useSelector(store => store.userInfo.isAuthenticated)
  
   const dispatch = useDispatch();
    const handleLogout = ()=> {
        dispatch(authenticateUser(false));
        // navigate('/');
        localStorage.clear();
        console.log(isAuth);

    }
  return (
    <div>
        <button className='logoutButtonStyle' onClick={()=> handleLogout()} >Logout</button>
    </div>
  )
}

export default LogoutButtonComponent;