import React from 'react';
import kei from './image/kei.jpg';
import banana from './image/banana.png';
import './App.css';
import useSound from 'use-sound';
import Sound from './music/mayu.mp3';

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
          <p>みる</p>
          <li>クラナド</li>
          <li>Air</li>
        </div>
      </header>
    </div>
  );
}

export default App;
