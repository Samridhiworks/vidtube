import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Video from './Components/Video';
import Feed from './Components/Feed';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Sidebar/>
         */}
        {/* <Video/> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
