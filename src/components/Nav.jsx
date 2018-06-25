import React from 'react';
import Menu from './Menu';
import Search from './Search';

function Nav(){
  let navStyles = {
    display: 'flex',
    justifyContent: 'space-between'
  };

  return(
    <div style={navStyles}>
      <Menu/>
      <Search/>
    </div>
  );
}

export default Nav;
