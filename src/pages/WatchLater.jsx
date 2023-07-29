import React from 'react';

import './css/Pages.css';
import { useVideo } from '../context/VideoContext';
import Navbar from '../components/Navbar/Navbar';
import VideoCard from '../components/VideoCard/VideoCard';

const WatchLater = () => {
  const { watchLater } = useVideo();
  return (
    <main>
      <Navbar />
      <div>
        <section>
          <h2>Watch Later</h2>
          <div className='content'>
            <div className='cardsContainer'>
              {watchLater && watchLater.length ? (
                watchLater.map((video) => (
                  <VideoCard key={video._id} video={video} />
                ))
              ) : (
                <p>No videos added to watch later</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WatchLater;
