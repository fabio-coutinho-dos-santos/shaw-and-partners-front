/* eslint-disable import/order */
/* eslint-disable react/react-in-jsx-scope */
import { UserContext } from '../../contexts/UserContext';
import './Details.sass';
import React, { useContext, useEffect } from 'react';

function Details() {
  const { userId } = useContext(UserContext);
  useEffect(() => {

  }, []);

  return (
    <div className="Details container d-flex align-items-center justify-content-center">
      <h1>
        Details
        {' '}
        {userId}
      </h1>
    </div>
  );
}

export default Details;
