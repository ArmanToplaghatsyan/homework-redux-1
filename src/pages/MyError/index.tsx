import React from 'react';
import { Link } from 'react-router-dom';

export const MyError: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <h2>Error</h2>
      <h3>404 error</h3>
      <p>I feel bad, but ur page is not definded</p>
      <p>Maybe try again ?</p>
      <Link to={'/'}>...Leave page...</Link>
    </div>
  );
});
