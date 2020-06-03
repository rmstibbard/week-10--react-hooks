import React from 'react';
import './App.css';
import Clicked from './components/Clicked'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <h1>Hooks</h1>
      <h2>Clicked</h2>
      <Clicked />

      <h2>Counter</h2>
      <Counter />

    </>
  );
}

export default App;
