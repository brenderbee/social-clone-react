import React from 'react';
import UserStatus from './UserStatus';
import StatusList from './StatusList';

function Newsfeed(){
  let newsfeedStyles = {
    width: '60%',
    marginRight: '2%'
  };

  return (
    <div style={newsfeedStyles}>
      <UserStatus/>
      <StatusList/>
    </div>
  );
}

// Profile.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default Newsfeed;
