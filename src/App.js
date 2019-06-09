import React from 'react';
import journal from './journal.png';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='headline'>
        <img className='journal' src={journal} alt='journal' />
      </div>
      <div className='grid' />
    </div>
  );
}

export default App;
