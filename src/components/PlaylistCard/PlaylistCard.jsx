import React from 'react';

import styles from './PlaylistCard.module.css';
import { useNavigate } from 'react-router-dom';

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();
  return (
    <article
      className={styles.playlistCard}
      onClick={() => navigate(`/playlist/${playlist.name}`)}
    >
      <div className={styles.thumbnailContainer}>
        <img src='https://picsum.photos/300/175' alt='Playlist thumbnail' />
      </div>
      <div className={styles.playlistInfo}>
        <h4>{playlist.name}</h4>
      </div>
    </article>
  );
};

export default PlaylistCard;
