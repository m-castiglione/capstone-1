import React from 'react';
import './App.css';
import info from './info';
import Stock from './components/Stock';

function createItem(info) {
  return (
    <div>
      <center>
      <Stock 
    key={info.key}
    title={info.title}
    serialNumber={info.serialNumber}
    price={info.price}
    developer={info.developer}
    category={info.category}
    />

      </center>

    </div>
  )
}

function App() {

function handleClick() {
  alert("Test!");
}

  return (
    <div className="App">
      <header className="storeName"><h1>Matt's Game Shack</h1></header>
        {info.map(createItem)}
        <footer><button className="buyButton" onClick={handleClick}>Buy</button></footer>
    </div>
  );
}

export default App;
