import React from 'react';

function Menu(){
  return(
    <div className="menu">
      <p>Home</p>
      <p>Notifications</p>
      <p>Messages</p>
      <style jsx>{`
          .menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 2px solid gray;
            margin: 0;
          }

          .menu p {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            margin: 0;
            border-right: 2px solid gray;
            font-size: 1.2rem;
            font-family: "Helvetica", sans-serif;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .menu p:hover {
            cursor: pointer;
            background: grey;
            color: white;
          }

          .menu p:nth-child(1) {
            border-left: 2px solid gray;
          }
          `}</style>
    </div>
  );
}

export default Menu;
