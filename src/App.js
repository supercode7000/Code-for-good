import React from 'react';

import First from './Components/First'
import './App.css';

import Second from './Second';

import ContactForm from './Components/СontactForm';

import Umfrage from './Components/Umfrage';

// import Umfrage from './Components/Umfrage';

//import HamburgerButton from './Components/HamburgerButton';



function App() {
  return (




    <div className="App">
      <ContactForm />
      <Umfrage />
      {/* <HamburgerButton /> */}
      <First />
      <Second />
    </div >
  );
}
export default App;