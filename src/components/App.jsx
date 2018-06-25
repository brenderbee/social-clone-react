import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import StatusList from './StatusList';
import RequestList from './RequestList';

function App(){
  let wrapper = {
    margin: '5% 10%'
  };

  return(
    <div style={wrapper}>
      <Nav/>
      <div className="main">
        <style jsx>{`
            .main {
              display: flex;
              justify-content: space-between;
              border-top: 2px solid grey;
            }
            `}</style>
        <Profile/>
        <StatusList/>
        <RequestList/>
      </div>
    </div>
  );
}

export default App;
