import "./App.css";
import React from "react";

function HeroText({ val }) {

    function HeroTextElement({ input, timing }) {
        const mystyle = {
            animationDelay: timing
          };
        return (
            <h1 className="HeroTextElement" style={mystyle}>{input}</h1>
        )

    }


    function HeroTextList({ lis }) {
        const stringarray = lis.split(" ");
        const rows = [];
        for (let index = 0; index < stringarray.length; index++) {
                let UniqueTime = (1000 * index).toString();
                rows.push(<HeroTextElement input={stringarray[index] + " "} timing={UniqueTime} />);
        }
        return (rows);
    }

    function HeroTextContain({input}) {
        return (
            <div className="HeroTextContain">
            <HeroTextList className="HeroTextList" lis={input}/>
            </div>
        );
    }


    return (
        <HeroTextContain input={val} />
    );
}

export default HeroText;
