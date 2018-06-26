import React from 'react';
// import PropTypes from 'prop-types';

function Profile(){
  let profileStyles = {
    width: '30%',
    marginRight: '2%',
    border: '1px solid black'
  };

  return (
    <div style={profileStyles}>
      <h2>Profile</h2>
    </div>
  );
}

// Profile.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default Profile;
