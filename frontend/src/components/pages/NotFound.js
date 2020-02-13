import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="display-4 text-center not-found-container">
      <h1 className="display-4">
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sorry, that page does not exist</p>
      <Link to="/">Go back to the phones list</Link>
    </div>
  );
};
