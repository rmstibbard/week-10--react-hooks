import React from 'react';
import './App.css';
import Clicked from './components/Clicked';
import Counter from './components/Counter';
import Square from './components/Square';


function App() {
  return (
    <>
      <h1>Hooks</h1>
      <h2>Clicked</h2>
      <Clicked />

      <h2>Counter</h2>
      <Counter />

      <h2>Square</h2>
      <Square colour="hotpink" />

    </>
  );
}

export default App;
