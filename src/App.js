import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import ExplorePage from './pages/ExplorePage';
import PlaylistPage from './pages/PlaylistPage';
import VideoPage from './pages/VideoPage';
import { VideoContextProvider } from './context/VideoContext';
import PlaylistDetailsPage from './pages/PlaylistDetailsPage';
import WatchLater from './pages/WatchLater';
import CategoryWisePage from './pages/CategoryWisePage';
import NotFound from './pages/404';

const App = () => {
  return (
    <>
      <Router>
        <VideoContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/explore' element={<ExplorePage />} />
            <Route path='/playlist' element={<PlaylistPage />} />
            <Route path='/video/:id' element={<VideoPage />} />
            <Route path='/watchlater' element={<WatchLater />} />
            <Route path='/category/:name' element={<CategoryWisePage />} />
            <Route path='/playlist/:name/' element={<PlaylistDetailsPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </VideoContextProvider>
      </Router>

      <ToastContainer
        position='top-center'
        autoClose={2500}
        draggable
        pauseOnHover
        pauseOnFocusLoss
        closeButton={false}
        theme='colored'
      />
    </>
  );
};

export default App;
