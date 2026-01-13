import React from 'react';
import { Input } from '../ui/input';

const SearchBar = () => {
  return (
    <div className='flex items-center justify-center'>
     <Input type='search' placeholder='Search...'/>
    </div>
  );
};

export default SearchBar;