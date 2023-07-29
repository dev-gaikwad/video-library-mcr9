import React from 'react';
import { useVideo } from '../../context/VideoContext';

import styles from './ImageCard.module.css';
import { useNavigate } from 'react-router-dom';

const ImageCard = ({ category }) => {
  const { setSelectedCategory } = useVideo();
  const navigate = useNavigate();

  const categorySelecthandler = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${category}`);
  };
  return (
    <article onClick={() => categorySelecthandler(category.category)}>
      <div className={styles.thumbnailContainer}>
        <img src={category.thumbnail} alt='thumbnail' />
      </div>
      <p>{category.category}</p>
    </article>
  );
};

export default ImageCard;
