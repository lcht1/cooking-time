import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';
import { IoArrowBackOutline, IoSearchOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import NavBottom from '../components/NavBottom.jsx';

import styles from '../styles/pages/Search.module.scss';

export default function Search() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Search');
  });

  return (
    <div className={styles.search}>
      <div className={styles.buttonContainer}>
        <Link to="/">
          <button>
            <IoArrowBackOutline size={26} />
          </button>
        </Link>
      </div>

      <header>
        <h1>What's in your kitchen?</h1>
        <span>Enter up to 2 ingredients or more</span>

        <div className={styles.inputWrapper}>
          <input type="text" placeholder="Type and add your ingredients..." />
          <button>
            <IoSearchOutline size={26} />
          </button>
        </div>
      </header>

      <NavBottom />
    </div>
  );
}
