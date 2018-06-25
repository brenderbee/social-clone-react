import React from 'react';

function Search(){
  return(
    <div className="search">
      <input type="text" name="search" className="search-field" placeholder="search"/>
      <button type="submit" className="search-button">submit</button>
      <style jsx>{`
          .search {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            height: 2.75rem;
          }
          .search-field {
            border: 2px solid #2e96de;
            border-radius: 2.4rem;
            font-size: 1rem;
            padding-left: 1.6rem;
            height: 100%;
            width: 225px;
            margin-right: 0.6rem;
            text-transform: uppercase;
          }

          .search-button {
            border: 2px solid #2e96de;
            background: #2e96de;
            color: white;
            border-radius: 2.75rem;
            height: 100%;
            padding: 0 1.6rem;
            font-size: 1rem;
            text-transform: uppercase;
            transition: background 0.3s ease, border 0.3s ease;
          }

          .search-button:hover {
            cursor: pointer;
            border: 2px solid #1e699c;
            background: #1e699c;
            color: white;
          }
          `}</style>
    </div>
  );
}

export default Search;
