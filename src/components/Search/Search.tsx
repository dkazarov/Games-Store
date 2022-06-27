import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { setSearchValue } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setSearchValue(value));
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type='text'
        placeholder='Search'
        value={value}
        onChange={searchInput}
      />
      <SearchIcon className={styles.search__icon} />
    </div>
  );
};
