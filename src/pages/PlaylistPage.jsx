import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';

import './css/Pages.css';
import { useVideo } from '../context/VideoContext';
import CreatePlaylistModal from '../components/CreatePlaylistModal/CreatePlaylistModal';
import PlaylistCard from '../components/PlaylistCard/PlaylistCard';

const PlaylistPage = () => {
  const [displayPlaylists, setDisplayPlaylists] = useState();
  const { playlists, displayModal, setDisplayModal } = useVideo();

  useEffect(() => {
    setDisplayPlaylists([...playlists]);
  }, [playlists]);

  return (
    <>
      <main>
        <Navbar />
        <div className='content'>
          <section>
            <div className='sectionHeader'>
              <h2>Playlists</h2>
              <button
                className='btn-primary'
                onClick={() => setDisplayModal(true)}
              >
                Create Playlist
              </button>
            </div>
            {displayPlaylists && displayPlaylists.length ? (
              <div className='cardsContainer'>
                {displayPlaylists.map((playlist, index) => (
                  <PlaylistCard key={index} playlist={playlist} />
                ))}
              </div>
            ) : (
              <p>You do not have any playlists</p>
            )}
          </section>
        </div>
      </main>
      {displayModal && <CreatePlaylistModal />}
    </>
  );
};

export default PlaylistPage;
