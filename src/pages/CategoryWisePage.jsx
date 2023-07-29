import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { useVideo } from '../context/VideoContext';
import VideoCard from '../components/VideoCard/VideoCard';

const CategoryWisePage = () => {
  const { name } = useParams();

  const { filterByCategory, filteredVideosList } = useVideo();

  useEffect(() => {
    filterByCategory();
  }, []);

  return (
    <main>
      <Navbar />
      <div>
        <section>
          <h2>{name}</h2>

          <div className='content'>
            <div className='cardsContainer'>
              {filteredVideosList.length &&
                filteredVideosList.map((video) => (
                  <VideoCard key={video._id} video={video} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CategoryWisePage;
