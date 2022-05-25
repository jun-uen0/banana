import React from 'react';
import kei from './image/kei.jpg';
import banana from './image/banana.png';
import './App.css';
import useSound from 'use-sound';
import Sound from './music/mayu.mp3';
import { Anime } from './components/Anime';
import { Camp } from './components/Camp';
import { Onsen } from './components/Onsen';
import { EnglishStudy } from './components/EnglishStudy';

function App() {
  const [play] = useSound(Sound);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          バナナ研究家藤野圭一によるクソサイト
        </p>
        <div>
        <img src={kei} className="App-logo" alt="logo" />
        <img src={banana} className="App-logo" alt="logo" />
        </div>
        
        <div className="App-list">
          <Anime/>
          <Camp/>
          <Onsen/>
          <EnglishStudy/>
        </div>
      </header>
    </div>
  );
}

export default App;
