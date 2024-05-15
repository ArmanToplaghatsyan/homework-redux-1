import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IFilm } from '../../type/type';
import { addFilm } from '../../store/reducer';

export const CreateFilm: React.FC = React.memo((): JSX.Element => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFilm>();
  const save = (data: IFilm): void => {
    dispatch(addFilm({ ...data, id: Date.now() }));
    reset();
  };

  const img: string[] = [
    '/img/1.webp',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jfif',
  ];

  return (
    <div>
      <h2>Create Film</h2>
      <form onSubmit={handleSubmit(save)}>
        <label>name</label>
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: 'Enter name' })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>year</label>
        <input
          type="text"
          placeholder="year"
          {...register('year', {
            required: 'Enter year',
            pattern: {
              value: /^\d+$/,
              message: 'NaN',
            },
          })}
        />
        {errors.year && <p>{errors.year.message}</p>}

        <label>genres</label>
        <input
          type="text"
          placeholder="genres"
          {...register('genres', { required: 'Enter genres' })}
        />
        {errors.genres && <p>{errors.genres.message}</p>}

        <label>producer</label>
        <input
          type="text"
          placeholder="producer"
          {...register('producer', { required: 'Enter producer' })}
        />
        {errors.producer && <p>{errors.producer.message}</p>}

        <select {...register('img', { required: 'Enter img' })}>
          <option hidden value={''}>select img</option>
          {
          img.map((elm, id) => {
            return (
              
              <option key={id} value={id}>
                {elm}
              </option>
            );
          })}
        </select>
        {errors.img && <p>{errors.img.message}</p>}
        <button>save</button>
      </form>
    </div>
  );
});
