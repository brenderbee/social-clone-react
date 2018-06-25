import React from 'react';
import PropTypes from 'prop-types';

function Status(){
  return (
    <div>
    </div>
  );
}

Status.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Status;
