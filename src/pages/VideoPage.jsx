import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  MdOutlineWatchLater,
  MdWatchLater,
  MdPlaylistAdd,
  MdNoteAdd,
} from 'react-icons/md';

import Navbar from '../components/Navbar/Navbar';
import { useVideo } from '../context/VideoContext';

import './css/Pages.css';

const VideoPage = () => {
  const [selectedVideo, setSelectedVideo] = useState();
  const [selectPlaylistModal, setSelectPlaylistModal] = useState(false);
  const [inWatchLater, setInWatchlater] = useState(false);

  const { id } = useParams();
  const { allVideos, addToPlaylist, playlists, watchLater, updateWatchLater } =
    useVideo();

  const video = allVideos.find((video) => video._id === +id);

  const addHandler = (video) => {
    setSelectedVideo(video);
    setSelectPlaylistModal(true);
  };

  const playlistSelectHandler = (playlistName) => {
    addToPlaylist(selectedVideo, playlistName);
    setSelectPlaylistModal(false);
  };

  const handleWatchLater = (video) => {
    setInWatchlater(!inWatchLater);
    updateWatchLater(video);
  };

  useEffect(() => {
    setInWatchlater(watchLater.find((video) => video._id === +id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Navbar />
      <div className='content'>
        {video && (
          <section className='videoSection'>
            <div className='videoWrapper'>
              <iframe
                height='315'
                width='560'
                src={video.src}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                title='Video'
              />
            </div>
            <div className='videoInfoTab'>
              <h3>{video.title}</h3>
              <div className='optionsContainer'>
                {inWatchLater ? (
                  <MdWatchLater onClick={() => handleWatchLater(video)} />
                ) : (
                  <MdOutlineWatchLater
                    onClick={() => handleWatchLater(video)}
                  />
                )}

                <MdPlaylistAdd onClick={() => addHandler(video)} />
                <MdNoteAdd />
                {selectPlaylistModal && (
                  <ul className='selectPlaylist'>
                    {playlists.map((playlist, index) => (
                      <li
                        key={index}
                        onClick={() => playlistSelectHandler(playlist.name)}
                      >
                        {playlist.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default VideoPage;
