import React from 'react';

function Header(){
  let headerStyles = {
    color: 'red'
  };

  return(
    <div style={headerStyles}>
      <h1 className="blue-bg">Help Queue</h1>
      <style jsx>{`
          .blue-bg:hover {
            cursor: pointer;
            background: blue;
          }
      `}</style>
    </div>
  );
}

export default Header;
