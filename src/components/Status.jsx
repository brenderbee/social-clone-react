import React from 'react';
import PropTypes from 'prop-types';

function Status(props){
  return (
    <div className="status">
      <img src={props.imageUrl} alt={props.username}></img>
      <div className="status-body">
        <h3>{props.username}</h3>
        <p>{props.message}</p>
      </div>
      <style jsx>{`
        .status {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          border-bottom: 1px solid grey;
          border-right: 2px solid grey;
          border-left: 2px solid grey;
          padding: 1.6rem;
        }

        .status:last-child {
          border-bottom: 2px solid grey;
        }

        .status img {
          height: 4rem;
          margin-right 1.6rem;
        }

        .status-body {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .status-body h3 {
          margin-bottom: 1.2rem;
        }

        .status-body p {
          margin: 0;
        }
        `}</style>
    </div>
  );
}

Status.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  message: PropTypes.string
};

export default Status;
