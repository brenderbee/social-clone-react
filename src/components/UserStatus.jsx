import React from 'react';

function UserStatus(){
  return (
    <div className="user-status">
      <div className="user-status-content">
        <img src="https://centrik.in/wp-content/uploads/2017/02/user-image-.png"></img>
        <input type="text" name="search" className="input-status" placeholder="What's Happening"/>
      </div>
      <style jsx>{`
        .user-status {
          background: #a6d8f2;
          height: auto;
          border: 2px solid #75c9f1;
        }

        .user-status-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 1.6rem;
        }

        .user-status-content img {
          height: 4rem;
          margin-right: 1.6rem;
        }

        .user-status-content input {
          height: 2.75rem;
          width: 100%;
          padding-left: 1.6rem;
          border: 2px solid #75c9f1;
          font-size: 1rem;
        }
        `}</style>
    </div>
  );
}


export default UserStatus;
