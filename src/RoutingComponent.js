import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom'

const RoutingComponent = () => {
    const isAuth = useSelector(store => store.userInfo.isAuthenticated)
    const navigate = useNavigate();
    useEffect(()=> {
      if(isAuth) {
        navigate('home')
      } else {
        navigate('auth')
      }
    }, [isAuth])
  return (
    <Outlet />
  )
}

export default RoutingComponent