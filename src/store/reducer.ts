import { IFilm } from '../type/type';
import { createStore } from 'redux';

const data: { films: IFilm[] } = {
  films: [
    {
      id: 1,
      name: 'Drama',
      year: 1990,
      genres: ['Drama', 'Sad'],
      producer: 'Some One',
      img: '/img/1.webp',
    },
    {
      id: 2,
      name: 'Science',
      year: 1998,
      genres: ['Science', 'Interesting'],
      producer: 'User',
      img: '/img/2.jpg',
    },
    {
      id: 3,
      name: 'Romansic',
      year: 1980,
      genres: ['Romansic', 'Tenderly'],
      producer: 'Producer',
      img: '/img/3.jpg',
    },
    {
      id: 4,
      name: 'Detectiv',
      year: 2020,
      genres: ['Detectiv', 'Mystery'],
      producer: 'Director',
      img: '/img/4.jpg',
    },
    {
      id: 5,
      name: 'Horror',
      year: 2025,
      genres: ['Horror', 'Scary'],
      producer: 'No Name',
      img: '/img/5.jfif',
    },
  ],
};

const reducer = (state = data, action: any) => {
  state = { ...state };
  switch (action.type) {
    case 'addFilm':
      state.films.push(action.value);
      break;

    case 'deleteFilmById':
      state.films = state.films.filter((elm) => elm.id != action.value);
      break;
  }

  return state;
};

export const store = createStore(reducer);

export const addFilm = (value: IFilm) => {
  return { type: 'addFilm', value };
};

export const deleteFilmById = (value: number) => {
  return { type: 'deleteFilmById', value };
};
