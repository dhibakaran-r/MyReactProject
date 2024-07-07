import React from 'react'
import './Search.css'
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
    <div className='search-block'>
        <div className='search-wrap'>
            <span className='search-icon'><IoMdSearch /></span>  
            <input type="text" name='search' className='search-bar' placeholder='Search' />
        </div>

    </div>
  )
}

export default Search;