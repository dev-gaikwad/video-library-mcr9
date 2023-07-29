import React from 'react';

import './css/Pages.css';
import Navbar from '../components/Navbar/Navbar';
import { useVideo } from '../context/VideoContext';
import VideoCard from '../components/VideoCard/VideoCard';

const ExplorePage = () => {
  const { searchedResultsList, searchVideosHandler } = useVideo();
  return (
    <main>
      <Navbar />
      <div className='content'>
        <section>
          <div className='sectionHeader'>
            <h2>Explore</h2>
            <input
              type='text'
              placeholder='Search Video by Title'
              onChange={(e) => searchVideosHandler(e.target.value)}
            />
          </div>
          <div className='cardsContainer'>
            {searchedResultsList.map((video) => (
              <VideoCard key={video._id} video={video} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ExplorePage;
