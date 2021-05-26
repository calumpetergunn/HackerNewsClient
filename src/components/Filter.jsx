import { useState } from 'react';

function Filter({onFilterSubmit}) {
  const [searchTitle, setSearchTitle] = useState('');

  const handleSearchTitleChange = (event) => {
    setSearchTitle(event.target.value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const titleToSearch = searchTitle.trim();
    
    // if (!titleToSearch){
    //   return;
    // }
    onFilterSubmit(titleToSearch);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Search by title" value={searchTitle} onChange={handleSearchTitleChange}></input>
        <input type="submit" value="Search"></input>
      </form>
    </>
  );
}

export default Filter;
