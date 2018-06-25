import React from 'react';
import Request from './Request';

var masterRequestList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function RequestList(){
  return (
    <div>
      <h2>Friend Requests</h2>
      {masterRequestList.map((request, index) =>
        <Request names={request.names}
          location={request.location}
          issue={request.issue}
          key={index}/>
      )}
    </div>
  );
}

export default RequestList;
