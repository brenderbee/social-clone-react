import React from 'react';
import Status from './Status';

var masterStatusList = [
  {
    imageUrl: 'https://centrik.in/wp-content/uploads/2017/02/user-image-.png',
    username: 'Brenda Franco',
    message: 'This is a happy place, little squirrels live here and play.'
  },
  {
    imageUrl: 'https://centrik.in/wp-content/uploads/2017/02/user-image-.png',
    username: 'Brenda Franco',
    message: 'This is a happy place, little squirrels live here and play. This is a happy place, little squirrels live here and play. This is a happy place, little squirrels live here and play.'
  },
  {
    imageUrl: 'https://centrik.in/wp-content/uploads/2017/02/user-image-.png',
    username: 'Brenda Franco',
    message: 'This is a happy place, little squirrels live here and play.This is a happy place, little squirrels live here and play.'
  }
];

function StatusList(){
  return (
    <div className="status-list">
      {masterStatusList.map((status, index) =>
        <Status imageUrl={status.imageUrl}
          username={status.username}
          message={status.message}
          key={index}/>
      )}
      <style jsx>{`
          .status-list {
            width: 100%;
          }
          `}</style>
    </div>
  );
}

export default StatusList;
