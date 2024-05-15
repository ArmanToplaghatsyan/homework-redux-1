import React from 'react';
import { Link } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={'/'}>Show Films</Link></li>
          <li><Link to={'/addFilm'}>Create Films</Link></li>
        </ul>
      </nav>
    </div>
  );
});
