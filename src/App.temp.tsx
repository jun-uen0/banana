import React from 'react';
import logo from './logo.svg';
import kei from './kei.jpg';
import banana from './banana.png';
import './App.css';
import useSound from 'use-sound';
import Sound from './mayu.mp3';

const newArr = new Array(10).fill('バナナ')
console.log('newArr', newArr)

function App() {
  const [play, { stop, pause }] = useSound(Sound);
  return (
    <div className="App">
      <header className="App-header">
        <img src={kei} className="App-logo" alt="logo" />
        <button onClick={() => play()}>トゥットゥルー</button>
        <p>
          バナナ研究家藤野圭一によるクソサイト
        </p>
        {newArr.map((fruit, i) => <img src={banana} className="App-logo" alt="logo" />)}
      </header>
    </div>
  );
}

export default App;
