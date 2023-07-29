import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { useVideo } from '../context/VideoContext';
import VideoCard from '../components/VideoCard/VideoCard';

const PlaylistDetailsPage = () => {
  const { name } = useParams();
  const { playlists, removeFromPlaylist } = useVideo();

  const playlistDetails = playlists.find((playlist) => playlist.name === name);

  return (
    <main>
      <Navbar />
      <section>
        {playlistDetails && (
          <>
            <h2>{name}</h2>
            <div className='content'>
              {playlistDetails.videos.map((video) => (
                <div key={video._id}>
                  <VideoCard video={video} />
                  <button
                    className='btn-primary'
                    onClick={() => removeFromPlaylist(video, name)}
                  >
                    Remove from playlist
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default PlaylistDetailsPage;
