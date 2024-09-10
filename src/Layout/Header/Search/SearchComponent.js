import React from 'react';
import './Search.css';

const SearchComponent = ({setsearchedTitle}) => {
  
  const handleInput = (e)=> {
    setsearchedTitle(e.target.value)
  }
  return (
    <>
      <input className='seachInputStyle' onChange={(e)=> handleInput(e)} placeholder='Quora search' type='text' />
    </>
  )
}

export default SearchComponent;