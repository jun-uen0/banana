import React from 'react';
import { useState } from "react";
import logo from './logo.svg';
import kei from './kei.jpg';
import banana from './banana.png';
import './App.css';

const newArr = new Array(10).fill('バナナ')
console.log('newArr', newArr)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={kei} className="App-logo" alt="logo" />
        <p>
          バナナ研究家藤野圭一によるクソサイト
        </p>
        {newArr.map((fruit, i) => <img src={banana} className="App-logo" alt="logo" />)}
      </header>
    </div>
  );
}

export default App;
