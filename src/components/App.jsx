import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import StatusList from './StatusList';
import RequestList from './RequestList';

function App(){
  return(
    <div>
      <Nav/>
      <div>
        <Profile/>
        <StatusList/>
        <RequestList/>
      </div>
    </div>
  );
}

export default App;
