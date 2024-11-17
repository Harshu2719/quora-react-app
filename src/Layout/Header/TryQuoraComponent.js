import React from 'react'
import './HeaderComponent.css';
import { Link } from 'react-router-dom';

const TryQuoraComponent = () => {
  return (
    <div className='tryQuoraStyle' >
      <Link className='tryQuoraStyleLink' to='/tryQuora'>TryQuora+</Link>
    </div>
  )
}

export default TryQuoraComponent