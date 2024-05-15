import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFilm } from '../../type/type';
import { deleteFilmById } from '../../store/reducer';

export const ShowFilms: React.FC = React.memo((): JSX.Element => {
  const { films } = useSelector((state: any) => state);
  console.log(films);

  const dispatch = useDispatch();

  return (
    <div>
      {films.map((elm: IFilm) => {
        return <div key={elm.id}>
          <h2>{elm.name}</h2>
          <h3>{elm.producer}</h3>
          <p>{elm.year}</p>
          <p>{elm.genres}</p>
          <img src={elm.img} alt="films" width={150} height={150} />
          <button onClick={() => {
            dispatch(deleteFilmById(elm.id))
          }}>&times;</button>
        </div>;
      })}
    </div>
  );
});
