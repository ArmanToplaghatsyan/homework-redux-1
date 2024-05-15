import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { MyError } from '../pages/MyError';
import { ShowFilms } from '../pages/ShowFilms';
import { CreateFilm } from '../pages/CreateFilm';

export const MyRouter = React.memo(() => {
  const router = useRoutes([
    {
      path: '/',
      element: <Layout/>,
      children: [
        { path: '', element: <ShowFilms/> },
        { path: 'addFilm', element: <CreateFilm/> },
      ],
    },
     {
      path: '*',
      element: <MyError/>,
    },
  ]);

  return router
}
);
