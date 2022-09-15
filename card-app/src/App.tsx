import React from 'react';
import './App.css';
import CreditCard from './components/CreditCard';
import {CreditCardData} from './components/CreditCardData'

function App() {
  return (
    <div className="app-container">
     <div className='main-bg'>
        <CreditCard data={CreditCardData} side="front"  />
        <CreditCard data={CreditCardData} side="back"  />
     </div>
     <div className='main-form'>

     </div>
    </div>
  );
}

export default App;
