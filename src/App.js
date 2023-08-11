import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Header.css';
import "./PortfolioLogo.css"
import { useState } from 'react';











function App() {

  function PortfolioLink({ directory, MyTabIndex }) {
    function handle_tab_click() {
      tabSet(MyTabIndex);
    }

    return (
      <div className="PortfolioLogo">
        <d onClick={handle_tab_click}>
            {directory}
          </d>
      </div>
    )
  }



  function PortfolioLogo() {
    return (
      <div className="PortfolioLogo ">
          <p>
            Liam Fortune
          </p>
      </div>
    );
  }



  function IndexDisplay({ Displayvalue }) {
    return (
      <div className='deez'>
        <p>{ Displayvalue}</p>
      </div>
    )
  }

  function PortfolioBody({tab}) {
    if (tab === 0) {
      return (
        <div>
          <h1>ABOUT</h1>
        </div>
      )
    }
    if (tab === 1) {
      return (
        <div>
          <h1>Projects</h1>
        </div>
      )
    }
    if (tab === 2) {
      return (
        <div>
          <h1>Stack</h1>
        </div>
      )
    }
    if (tab === 3) {
      return (
        <div>
          <h1>CONTACT</h1>
        </div>
      )
    }
  }




  function SiteHeader() {
    return (
      <div className="Header">
        <div className='HeaderFlex'>
          <PortfolioLink directory={"About"} MyTabIndex={0}/>
          <PortfolioLink directory={"Projects"}  MyTabIndex={1}/>
          <PortfolioLogo />
          <PortfolioLink directory={"Stack"}  MyTabIndex={2}/>
          <PortfolioLink directory={"Contact"} MyTabIndex={3} />
        </div>
      </div>
    );
  }

  let [tabValue, tabSet] = useState(null);

  return (
    <div className="App">
      <SiteHeader />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    <IndexDisplay Displayvalue={tabValue} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PortfolioBody tab={tabValue}/>
    </div>
  );
}

export default App;
