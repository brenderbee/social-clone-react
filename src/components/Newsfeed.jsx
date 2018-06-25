import React from 'react';
import UserStatus from './UserStatus';
import StatusList from './StatusList';

function Newsfeed(){
  return (
    <div className="newsfeed">
      <UserStatus/>
      <StatusList/>
      <style jsx>{`
        .newsfeed {
          width: 40%;
        }
        `}</style>
    </div>
  );
}

// Profile.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default Newsfeed;
