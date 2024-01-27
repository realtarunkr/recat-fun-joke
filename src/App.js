import './App.css';

import React, { Component } from 'react' ;

import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
    <footer className = "Footer">
        <Footer srctext="Fun Game" />
      </footer>
      <div className="App-header">
        <Home/>
      </div>
    
      <footer className = "Footer">
        <Footer srctext="Made me"/>
      </footer>
     
    </div>
  );
}

export default App;