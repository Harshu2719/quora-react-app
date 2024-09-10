import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import './Search.css';

const SearchBarButtonComponent = ({searchedTitle}) => {
  return (
    <div>
        <Link to={'/search/title/'+ searchedTitle}> <button className='serachButton' disabled={!searchedTitle} ><FaSearch /></button></Link>
    </div>
  )
}

export default SearchBarButtonComponent;