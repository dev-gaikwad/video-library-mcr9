import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineWatchLater, MdWatchLater } from 'react-icons/md';

import styles from './VideoCard.module.css';
import { useVideo } from '../../context/VideoContext';

const VideoCard = ({ video }) => {
  const { _id, title, category, creator, views, thumbnail } = video;

  const [inWatchLater, setInWatchlater] = useState(false);

  const { watchLater, updateWatchLater } = useVideo();
  const navigate = useNavigate();

  const handleWatchLater = (video) => {
    setInWatchlater(!inWatchLater);
    updateWatchLater(video);
  };

  useEffect(() => {
    setInWatchlater(watchLater.find((video) => video._id === _id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className={styles.videoCard}>
      <div className={styles.thumbnailContainer}>
        <img src={thumbnail} alt='video thumbnail' />
        <div className={styles.watchLaterBtn}>
          {inWatchLater ? (
            <MdWatchLater onClick={() => handleWatchLater(video)} />
          ) : (
            <MdOutlineWatchLater onClick={() => handleWatchLater(video)} />
          )}
        </div>
      </div>
      <div
        className={styles.videoInfo}
        onClick={() => navigate(`/video/${_id}`)}
      >
        <h4>{title}</h4>
        <h6>{category}</h6>
        <h5>{creator}</h5>
        <small>Views : {views}</small>
      </div>
    </article>
  );
};

export default VideoCard;
