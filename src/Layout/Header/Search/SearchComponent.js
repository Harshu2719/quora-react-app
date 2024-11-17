import React from 'react';
import './Search.css';

const SearchComponent = ({setSearchedTitle}) => {
  
  const handleInput = (e)=> {
    setSearchedTitle(e.target.value)
  }
  return (
    <>
      <input className='searchInputStyle' onChange={(e)=> handleInput(e)} placeholder='Search Quora' type='text' />
    </>
  )
}

export default SearchComponent;