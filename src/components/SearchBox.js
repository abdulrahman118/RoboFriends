import React from 'react';

const SearchBox = ({onSearchChange}) =>{
    return (
        <div  className='pa2'>
            <input            
            className='pa3 ba b--green bg-lightest-blue'
            onChange={onSearchChange} 
            type='seach' 
            placeholder='search Robofriends'
            aria-label='Search Robots'/>
        </div>
    )
}


export default SearchBox;
