import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./Header.css";
import "./PortfolioLogo.css";
import { useState } from "react";
import HomeView from "./Views/Home/HomeView";

function App() {
    function PortfolioLink({ directory, MyTabIndex, Logo }) {
        function handle_tab_click() {
            tabSet(MyTabIndex);
        }

        if (Logo === true) {
            return (
                <div className="PortfolioLogo">
                    <d onClick={handle_tab_click}>{directory}</d>
                </div>
            );
        } else {
            return (
                <div className="PortfolioLog--Big">
                    <d onClick={handle_tab_click}>Liam Fortune</d>
                </div>
            );
        }
    }

    function IndexDisplay({ Displayvalue }) {
        return (
            <div className="deez">
                <p>{Displayvalue}</p>
            </div>
        );
    }

    function PortfolioBody({ tab }) {
        if (tab === 0) {
            return (
                <HomeView/>
            );
        }
        if (tab === 1) {
            return (
                <div>
                    <h1>Projects</h1>
                </div>
            );
        }
        if (tab === 2) {
            return (
                <div>
                    <h1>Stack</h1>
                </div>
            );
        }
        if (tab === 3) {
            return (
                <div>
                    <h1>CONTACT</h1>
                </div>
            );
        }
    }

    function SiteHeader() {
        return (
            <div className="Header">
                <div className="HeaderFlex">
                    <PortfolioLink directory={"About"} MyTabIndex={1} />
                    <PortfolioLink directory={"Projects"} MyTabIndex={2} />
                    <PortfolioLink directory={"Projects"} MyTabIndex={0} Logo={true} />
                    <PortfolioLink directory={"Stack"} MyTabIndex={3} />
                    <PortfolioLink directory={"Contact"} MyTabIndex={4} />
                </div>
            </div>
        );
    }

    let [tabValue, tabSet] = useState(0);

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
            <PortfolioBody tab={tabValue} />
        </div>
    );
}

export default App;
