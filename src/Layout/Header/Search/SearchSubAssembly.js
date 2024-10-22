import React, { useState } from 'react'
import SearchComponent from './SearchComponent'
import SearchBarButtonComponent from './SearchBarButtonComponent';
import './Search.css';

const SearchSubAssembly = () => {
    const[searchedTitle, setSearchedTitle] = useState()
  return (
    <div className='subAssemblyStyle'>
        <SearchComponent setSearchedTitle={setSearchedTitle} />
        <SearchBarButtonComponent searchedTitle={searchedTitle} setSearchedTitle={setSearchedTitle} />
    </div>
  )
}

export default SearchSubAssembly