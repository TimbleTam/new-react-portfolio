import "./App.css";
import React from "react";
import "./PortfolioLogo.css";
import { useState } from "react";
import HomeView from "./Views/Home/HomeView";

function App() {
    function PortfolioLink({ directory, MyTabIndex, Logo }) {
        function handle_tab_click() {
            tabSet(MyTabIndex);
        }

        if (Logo !== true) {
            return (
                <div className="HeaderTab">
                    <d onClick={handle_tab_click}>{directory}</d>
                </div>
            );
        } else {
            return (
                <div className="HeaderTabBig">
                    <d onClick={handle_tab_click}>Liam Fortune</d>
                </div>
            );
        }
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
            <div className="HeaderNav">
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

            <header className="App-header">
            <PortfolioBody tab={tabValue} />
            </header>
            <SiteHeader />
        </div>
    );
}

export default App;
