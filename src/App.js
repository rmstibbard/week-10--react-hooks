import React from 'react';
import './App.css';
import Clicked from './components/Clicked';
import Counter from './components/Counter';
import Square from './components/Square';
import ToggleText from './components/ToggleText';

function App() {
  return (
    <>
      <h1>Hooks</h1>

      <h2>Clicked</h2>
      <Clicked />

      <h2>Square</h2>
      <Square colour="hotpink" />

      <h2>ToggleText</h2>
      <ToggleText initial="Hello" alternate="World" />

      <h2>Counter </h2>
      <Counter initial={50} max={100} />
    </>
  );
}

export default App;
