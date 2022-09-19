
import menu from './menu.png'
import './App.css';
import React, { useState } from 'react';

function App() {

  let [source, changeSource] = useState("desktop_map.jpeg")

  function resizeListener() {
    changeSource(window.innerWidth < 900 ? "mobile_map.png" : 'desktop_map.jpeg');
    console.log(window.innerWidth)
  }
  
  window.addEventListener("resize", resizeListener);


  return (
    <div className='main-body'>
        <div className='main-body--header'>
          <h1 className='title'>
            DRUBER
          </h1>
          <img className="menu" src={menu} alt="menu"></img>
        </div>
        <div className='main-body--map'>
        <img className="main-body--map-element" src={source} alt='.map'></img>
          <div className='main-body--info'>
            Your drone is <strong>15 minutes away!</strong>

            It is being remotely driven by: Ram Jayakumar (1.3 / 5 stars)
          </div>
        </div>
        
    </div>
  );
}

export default App;
