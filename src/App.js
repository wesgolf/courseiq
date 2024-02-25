import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Unauthorized Pages */
import Mainpage from './Unauthorized Pages/mainpage.js';
import Features from './Unauthorized Pages/features.js';
import Blog from './Unauthorized Pages/blog.js';
import Contact from './Unauthorized Pages/contact.js';

/* Login and Register */
import Login from './Unauthorized Pages/login.js'
import Register from './Unauthorized Pages/register.js';

/* 
import Homepage from './components/authorized components/homepage.js';
import Newround from './components/authorized components/newround.js';
import { useState } from 'react';
import Settings from './components/authorized components/settings.js';
import Friends from './components/authorized components/friendsnew.js';
import Pricing from './pages/pricing.js';

import Previousrounds from './components/authorized components/previousrounds.js';
import Friend from './components/authorized components/friend.js';
import Newroundnew from './components/authorized components/newroundnew.js';
*/

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/features" element={<Features />} />
          {/*<Route path='/pricing' element={<Pricing />} /> */}
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />

          {/* Login and Register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 

          {/*Authorized */} {/*
          <Route path='/dashboard' element={<Homepage />} />
          <Route path='/newround' element={<Newroundnew />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/friends' element={<Friends />} />
          <Route path='/previousrounds' element={<Previousrounds/>} />
  <Route path='/friend' element={<Friend />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;