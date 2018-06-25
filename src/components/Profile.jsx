import React from 'react';
import PropTypes from 'prop-types';

function Profile(){
  return (
    <div>

    </div>
  );
}

Profile.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Profile;
