import React from 'react';
import Menu from './Menu';
import Search from './Search';

function Nav(){
  let navStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.6rem'
  };

  return(
    <div style={navStyles}>
      <Menu/>
      <Search/>
    </div>
  );
}

export default Nav;
