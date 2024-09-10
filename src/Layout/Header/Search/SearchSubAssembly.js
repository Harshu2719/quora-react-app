import React, { useState } from 'react'
import SearchComponent from './SearchComponent'
import SearchBarButtonComponent from './SearchBarButtonComponent';
import './Search.css';

const SearchSubAssembly = () => {
    const[searchedTitle, setsearchedTitle] = useState()
  return (
    <div className='subAssemblyStyle'>
        <SearchComponent setsearchedTitle={setsearchedTitle} />
        <SearchBarButtonComponent searchedTitle={searchedTitle} />
    </div>
  )
}

export default SearchSubAssembly