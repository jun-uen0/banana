import React from 'react';
import './App.css';
import useSound from 'use-sound';
import Sound from './music/mayu.mp3';
import { Anime } from './components/Anime';
import { Camp } from './components/Camp';
import { Onsen } from './components/Onsen';
import { ButtonBlue } from './components/Button';
import Layout from './components/Layout';

import { EnglishStudy } from './components/EnglishStudy';
import { Layers } from '@mui/icons-material';
import { ProSidebar } from 'react-pro-sidebar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
        
    //     <div className="App-list">
    //       {/* <ButtonBlue/>
    //       <Anime/>
    //       <Camp/>
    //       <Onsen/>
    //       <EnglishStudy/> */}
    //       <Layout />
    //     </div>
    //   </header>
    // </div> 
    <Layout />
  );
}

export default App;
