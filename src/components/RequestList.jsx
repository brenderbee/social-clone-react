import React from 'react';
import Request from './Request';

var masterRequestList = [
  {
    imageUrl: 'https://centrik.in/wp-content/uploads/2017/02/user-image-.png',
    username: 'Thanatos'
  },
  {
    imageUrl: 'https://centrik.in/wp-content/uploads/2017/02/user-image-.png',
    username: 'Demona'
  },
  {
    imageUrl: 'https://centrik.in/wp-content/uploads/2017/02/user-image-.png',
    username: 'Goliath'
  }
];

function RequestList(){
  let requestListStyles = {

  };

  return (
    <div style={requestListStyles}>
      {masterRequestList.map((request, index) =>
        <Request imageUrl={request.imageUrl}
          username={request.username}
          key={index}/>
      )}
    </div>
  );
}

export default RequestList;
