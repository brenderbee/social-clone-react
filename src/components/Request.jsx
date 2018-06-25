import React from 'react';
import PropTypes from 'prop-types';

function Request(){
  return (
    <div>

    </div>
  );
}

Request.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Request;
