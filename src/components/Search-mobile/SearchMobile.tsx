import React, { useState } from 'react';

import { setSearchValue } from '../../redux/slices/filterSlice';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import styles from './SearchMobile.module.scss';

export const SearchMobile = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    dispatch(setSearchValue(value));
  };

  const clearSearchInput = () => {
    dispatch(setSearchValue(''));
    setValue('');
  };

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        type='text'
        placeholder='Пошук...'
        value={value}
        onChange={searchInput}
      />
      <SearchIcon className={styles.search__icon} />
      {value && <CloseIcon onClick={clearSearchInput} className={styles.clear__icon} />}
    </div>
  );
};
