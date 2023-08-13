import React from "react";

import "../Views.css";
import HeroText from "../../Hero";
import eng from "../../lang";
import "../../App.css";
import ImageScrollCarousel from "../ImageCarosel";
import SplitView from "../Double";

function HomeView() {

    const cats = ["https://github.com/TimbleTam/portfolio/blob/af7363d28524c51618cbf777c34769ab138f473c/me%20pic%201.jpg?raw=true",
        "https://github.com/TimbleTam/portfolio/blob/af7363d28524c51618cbf777c34769ab138f473c/me%20pic%202.jpg?raw=true",
        "https://github.com/TimbleTam/portfolio/blob/af7363d28524c51618cbf777c34769ab138f473c/me%20pic%203.jpg?raw=true",
        "https://github.com/TimbleTam/portfolio/blob/af7363d28524c51618cbf777c34769ab138f473c/me%20pic%204.jpg?raw=true"
         ]

    return (
        <div className="View">

            <div className="View--splash">
            <HeroText className="HeroText" val={eng.GlobalWords.Hello} />
            </div>

            <br></br>
            <SplitView sideleft={<h1 className="ImportantText">{ eng.GlobalWords.IAM}</h1>}/>
            <ImageScrollCarousel val={cats} length={12}  />

        </div>
    );
}

export default HomeView;
