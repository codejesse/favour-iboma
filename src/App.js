import React from 'react';
import './App.css';
import ReactFloaterJs from 'react-floaterjs';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

function App() {
  const { width, height } = useWindowSize()
  return (
    <div className="container">
      <Confetti
        width={width}
        height={height}
      />
      <ReactFloaterJs>
        <img src="favour.jpeg" alt="favour" />
      </ReactFloaterJs>
      <h1 className="text">🎉Happy Birthday favour🎉</h1>
    </div>
  );
}

export default App;
