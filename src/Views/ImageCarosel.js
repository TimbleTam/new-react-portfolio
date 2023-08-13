import "./Carousel.css";
import React from "react";

function ImageScrollCarousel({ val, length}) {

    function CarouselElement({ input, timing, length, rotation }) {
        const mystyle = {
            "animationDelay": timing + "s",
            "animationDuration": length + "s",
            "rotate": rotation + "deg"
          };
        return (
            <img alt="Imag" src={input} className="CarouselElement" style={mystyle}/>
        )

    }


    function CarouselList({ lis, time_length }) {

        const rows = [];
        for (let index = 0; index < lis.length; index++) {
            const half = ((lis.length - 1) * (time_length / 5));
            let UniqueTime = ((index * (time_length / 5)) - half).toString();
            let random_rotation = (Math.random() * 20) - 10;
                rows.push(<CarouselElement input={lis[index]} timing={UniqueTime} length={time_length} rotation={random_rotation} />);
        }
        return (rows);
    }

    function CarouselContain({input, time_length}) {
        return (
            <div className="CarouselContain">
            <CarouselList className="CarouselList" lis={input} time_length={time_length}/>
            </div>
        );
    }


    return (
        <CarouselContain input={val} time_length={length} />
    );
}

export default ImageScrollCarousel;
