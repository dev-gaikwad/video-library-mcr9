import { createContext, useContext, useEffect, useState } from 'react';
import { categories, videos } from '../data/data';
import { toast } from 'react-toastify';

export const VideoContext = createContext();

export const VideoContextProvider = ({ children }) => {
  const [videoCategories, setVideoCategories] = useState([...categories]);
  const [allVideos, setAllVideos] = useState([...videos]);
  const [playlists, setPlaylists] = useState(
    () => JSON.parse(localStorage.getItem('playlists')) ?? []
  );
  const [watchLater, setWatchLater] = useState(
    () => JSON.parse(localStorage.getItem('watchlater')) ?? []
  );
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchedResultsList, setSearchedResultsList] = useState([
    ...allVideos,
  ]);
  const [filteredVideosList, setFilteredVideosList] = useState([...allVideos]);

  const [displayModal, setDisplayModal] = useState(false);

  const filterByCategory = () => {
    if (selectedCategory) {
      const videoArray = [...allVideos];
      const filteredByCategory = videoArray.filter(
        (video) => video.category === selectedCategory
      );
      setFilteredVideosList(filteredByCategory);
    } else setDisplayModal([...allVideos]);
  };

  const searchVideosHandler = (searchTerm) => {
    if (searchTerm) {
      const searchArray = [...allVideos];
      const searchResults = searchArray.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedResultsList(searchResults);
    } else setSearchedResultsList([...allVideos]);
  };

  const createPlaylist = (playlistData) => {
    let playlistsArray;

    playlistsArray = [...playlists];

    playlistsArray.push(playlistData);
    // localStorage.setItem('playlists', JSON.stringify(playlistsArray));
    setPlaylists([...playlistsArray]);
    setDisplayModal(false);
  };

  const addToPlaylist = (video, playlistName) => {
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.name === playlistName
          ? { ...playlist, videos: [...playlist.videos, video] }
          : playlist
      )
    );
    toast.success(`Added to ${playlistName}`);
  };

  const removeFromPlaylist = (selectedVideo, playlistName) => {
    setPlaylists((prev) =>
      prev.map((playlist) =>
        playlist.name === playlistName
          ? {
              ...playlist,
              videos: playlist.videos.filter(
                (video) => video._id !== selectedVideo._id
              ),
            }
          : playlist
      )
    );
    toast.success(`Removed from ${playlistName}`);
  };

  const updateWatchLater = (selectedVideo) => {
    let videoIndex;
    if (watchLater.length) {
      videoIndex = watchLater.findIndex(
        (video) => video._id === selectedVideo._id
      );
      if (videoIndex === -1) {
        setWatchLater((prev) => [...prev, selectedVideo]);
        toast.success('Added to watch later');
      } else {
        setWatchLater((prev) =>
          prev.filter((video, index) => index !== videoIndex)
        );
        toast.success('Removed from watch later');
      }
    } else {
      setWatchLater((prev) => [...prev, selectedVideo]);
      toast.success('Added watch later');
    }
  };

  useEffect(() => {
    localStorage.setItem('playlists', JSON.stringify(playlists));
  }, [playlists]);

  useEffect(() => {
    localStorage.setItem('watchlater', JSON.stringify(watchLater));
  }, [watchLater]);

  return (
    <VideoContext.Provider
      value={{
        videoCategories,
        setVideoCategories,
        allVideos,
        setAllVideos,
        selectedCategory,
        setSelectedCategory,
        filteredVideosList,
        searchedResultsList,
        filterByCategory,
        searchVideosHandler,
        displayModal,
        setDisplayModal,
        createPlaylist,
        playlists,
        addToPlaylist,
        removeFromPlaylist,
        watchLater,
        updateWatchLater,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
