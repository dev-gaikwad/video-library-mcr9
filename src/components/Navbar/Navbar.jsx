import React from 'react';
import {
  MdHome,
  MdExplore,
  MdPlaylistPlay,
  MdWatchLater,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

const activeStyle = {
  backgroundColor: '#ff0000',
  color: '#fff',
  borderRadius: '9999px',
  width: 'max-content',
  fontWeight: 'bold',
  transform: 'scale(1.05)',
};

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        <li className={styles.navlistItems}>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.navLink}
          >
            <MdHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.navlistItems}>
          <NavLink
            to='/explore'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.navLink}
          >
            <MdExplore />
            <span>Explore</span>
          </NavLink>
        </li>
        <li className={styles.navlistItems}>
          <NavLink
            to='/playlist'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.navLink}
          >
            <MdPlaylistPlay />
            <span>Playlist</span>
          </NavLink>
        </li>
        <li className={styles.navlistItems}>
          <NavLink
            to='/watchlater'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={styles.navLink}
          >
            <MdWatchLater />
            <span>Watch Later</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
