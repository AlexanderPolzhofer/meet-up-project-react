import React from 'react';

import { Routes, Route } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetups />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/newMeetup' element={<NewMeetup />} />
      </Routes>
    </div>
  );
}

export default App;
