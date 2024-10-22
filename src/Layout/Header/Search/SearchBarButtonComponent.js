import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import './Search.css';

const SearchBarButtonComponent = ({searchedTitle, setSearchedTitle}) => {
  const handleSearchedTitle = ()=> {
    setSearchedTitle('');
  }
  return (
    <div>
        <Link to={'/search/title/'+ searchedTitle}> <button onClick={()=> handleSearchedTitle()} className='serachButton' disabled={!searchedTitle} ><FaSearch /></button></Link>
    </div>
  )
}

export default SearchBarButtonComponent;