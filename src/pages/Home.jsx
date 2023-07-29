import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useVideo } from '../context/VideoContext';

import './css/Pages.css';
import ImageCard from '../components/ImageCard/ImageCard';

const Home = () => {
  const { videoCategories } = useVideo();

  return (
    <main>
      <Navbar />
      <div className='content'>
        <section>
          <div className='sectionHeader'>
            <h2>Categories</h2>
          </div>
          <div className='cardsContainer'>
            {videoCategories.map((category) => (
              <ImageCard key={category._id} category={category} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
