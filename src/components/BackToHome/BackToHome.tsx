import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BackToHome.module.scss';

export const BackToHome: React.FC = () => {
  return (
    <>
      <Link to='/'>
        <h6 className={styles.root}>Повернутися до магазину</h6>
      </Link>
    </>
  );
};
