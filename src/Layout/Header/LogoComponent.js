import React from 'react'
import './HeaderComponent.css';
import { Link } from 'react-router-dom';

const LogoComponent = () => {
  return (
    <Link to={'/home'} style={{textDecoration: 'none'}}><h1 className='logoStyle' >
        Quora
    </h1></Link>
  )
}

export default LogoComponent