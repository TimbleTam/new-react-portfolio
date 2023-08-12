import React from "react";

import "../Views.css";
import HeroText from "../../Hero";
import eng from "../../lang";
import "../../App.css";

function HomeView() {

    return (
        <div className="View">

            <div className="View--splash">
            <HeroText className="HeroText" val={eng.GlobalWords.Hello} />
            </div>
        </div>
    );
}

export default HomeView;
