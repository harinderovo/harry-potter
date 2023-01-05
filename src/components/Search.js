import React from 'react'

function Search({search, setSearch}) {
  return (
    <div className='search ui large fluid icon input'>
        <input value={search} type="text" placeholder="Search Characters" onChange={(e) => setSearch(e.target.value)} />
        <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;