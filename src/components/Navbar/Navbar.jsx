import React from 'react';
import {
  MdHome,
  MdExplore,
  MdPlaylistPlay,
  MdWatchLater,
} from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  const pathMatchRoute = (route) => route === location.pathname;

  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        <Link to='/'>
          <li
            className={
              pathMatchRoute('/') ? styles.navListActive : styles.navlistItems
            }
          >
            <MdHome />
            <span>Home</span>
          </li>
        </Link>
        <Link to='/explore'>
          <li
            className={
              pathMatchRoute('/explore')
                ? styles.navListActive
                : styles.navlistItems
            }
          >
            <MdExplore />
            <span>Explore</span>
          </li>
        </Link>
        <Link to='/playlist'>
          <li
            className={
              pathMatchRoute('/playlist')
                ? styles.navListActive
                : styles.navlistItems
            }
          >
            <MdPlaylistPlay />
            <span>Playlist</span>
          </li>
        </Link>
        <Link to='/watchlater'>
          <li
            className={
              pathMatchRoute('/watchlater')
                ? styles.navListActive
                : styles.navlistItems
            }
          >
            <MdWatchLater />
            <span>Watch Later</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
