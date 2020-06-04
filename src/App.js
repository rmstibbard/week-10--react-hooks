import React from 'react';
import './App.css';
import Clicked from './components/Clicked';
import Counter from './components/Counter';
import Square from './components/Square';
import ToggleText from './components/ToggleText';
import StepCounter from './components/StepCounter';
import CatchMeIfYouCan from './components/CatchMeIfYouCan';
import RollCall from './components/RollCall';

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

      <h2>StepCounter</h2>
      <StepCounter max={100} step={5} />

      <h2>Catch Me If You Can!</h2>
      <CatchMeIfYouCan jump={100} />

      <h2>Rollcall</h2>
      <RollCall names={
        ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]
      } />

    </>
  );
}

export default App;
