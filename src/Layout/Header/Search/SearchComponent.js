import React from 'react';
import './Search.css';

const SearchComponent = ({setSearchedTitle}) => {
  
  const handleInput = (e)=> {
    setSearchedTitle(e.target.value)
  }
  return (
    <>
      <input className='seachInputStyle' onChange={(e)=> handleInput(e)} placeholder='Quora search' type='text' />
    </>
  )
}

export default SearchComponent;