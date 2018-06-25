import React from 'react';
import Status from './Status';

var masterStatusList = [
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

function StatusList(){
  return (
    <div>
      <hr/>
      {masterStatusList.map((status, index) =>
        <Status names={status.names}
          location={status.location}
          issue={status.issue}
          key={index}/>
      )}
    </div>
  );
}

export default StatusList;
