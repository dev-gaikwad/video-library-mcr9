import React, { useState } from 'react';
import { useVideo } from '../../context/VideoContext';

import './CreateModal.css';

const CreatePlaylistModal = () => {
  const [playlistData, setPlaylistData] = useState({
    name: '',
    description: '',
    videos: [],
  });

  const { setDisplayModal, createPlaylist } = useVideo();
  const ModalInputHandler = (event) => {
    const { name, value } = event.target;
    setPlaylistData((prev) => ({ ...prev, [name]: value }));
  };
  const ModalSubmitHandler = (event) => {
    event.preventDefault();
    createPlaylist(playlistData);
  };
  return (
    <div className='modal-container'>
      <div className='centered'>
        <div className='modal'>
          <h6 className='modal-heading'>Create New Playlist</h6>
          <h1 className='modal-heading'>Playlist</h1>

          <form className='modal-form' onSubmit={ModalSubmitHandler}>
            <div className='input-container'>
              <label htmlFor='name'>Playlist Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                placeholder='Music Videos'
                required
                onChange={ModalInputHandler}
              />
            </div>

            <div className='input-container'>
              <label htmlFor='description'>Description:</label>
              <input
                type='text'
                id='description'
                name='description'
                placeholder='My favourite music playlist'
                required
                onChange={ModalInputHandler}
              />
            </div>

            <div className='modal-buttons-container'>
              <button
                className='modal-btn'
                type='button'
                onClick={() => setDisplayModal(false)}
              >
                Discard
              </button>
              <button className='modal-btn' type='submit'>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistModal;
