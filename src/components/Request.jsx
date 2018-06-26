import React from 'react';
import PropTypes from 'prop-types';

function Request(props){
  return (
    <div className="request">
      <img src={props.imageUrl}></img>
      <h3>{props.username}</h3>
      <button>Add Friend</button>
      <style jsx>{`
          .request {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 2px solid grey;
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
            margin-bottom: 1.6rem;
          }

          .request img {
            height: 4rem;
            margin-right: 1.2rem;
            margin-left: 1.2rem;
          }

          .request h3 {
            margin-right: 1.2rem;
          }

          .request button {
            margin-right: 1.2rem;
          }
          `}</style>
    </div>
  );
}

Request.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Request;
