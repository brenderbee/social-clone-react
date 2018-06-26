import React from 'react';
import Nav from './Nav';
import Profile from './Profile';
import RequestList from './RequestList';
import Newsfeed from './Newsfeed';

function App(){
  let wrapper = {
    margin: '5% 10%'
  };

  return(
    <div style={wrapper}>
      <Nav/>
      <div className="main">
        <Profile/>
        <Newsfeed/>
        <RequestList/>
        <style jsx>{`
            .main {
              display: flex;
              justify-content: space-between;
              border-top: 2px solid grey;
              padding-top: 1.6rem;
            }
            `}</style>
      </div>
    </div>
  );
}

export default App;
