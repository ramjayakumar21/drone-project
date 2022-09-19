
import './App.css';
import React, { useState } from 'react';

function App() {

  let [source, changeSource] = useState("desktop_map.jpeg")

  let [source2, changeSource2] = useState("menu-text.png")

  function resizeListener() {
    changeSource(window.innerWidth < 900 ? "mobile_map.png" : 'desktop_map.jpeg');
  }

  function resizeListener2() {
    changeSource2(window.innerWidth < 900 ? "menu.png" : 'menu-text.png');
  }
  
  window.addEventListener("resize", resizeListener);
  window.addEventListener("resize", resizeListener2);


  return (
    <div className='main-body'>
        <div className='main-body--header'>
          <h1 className='title'>
            DRUBER
          </h1>
          <img className="menu" src={source2} alt="menu"></img>
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
