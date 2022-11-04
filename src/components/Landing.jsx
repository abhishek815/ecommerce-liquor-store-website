import React from "react";
import picture from "../assets/picture-1.jpg";
import picture2 from "../assets/picture-2.jpeg";
import picture3 from "../assets/picture-3.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Landing.css";
import Cards from "./ui/Cards";

const Landing = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="landing">
      <div className="row__nopadding">
        <div className="carousel__container">
          <Carousel
            responsive={responsive}
            infinite={true}
            className="skill-slider"
            autoPlay={true}
            interval={10000}
          >
            <div className="item">
              <img src={picture} className="car__img" alt=""></img>
            </div>
            <div className="item">
              <img src={picture2} className="car__img" alt=""></img>
            </div>
            <div className="item">
              <img src={picture3} className="car__img" alt=""></img>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="featured__section">
            <h1 className="featured__title">What We Have</h1>
            <div className="featured__cards">
            <Cards img="https://content.gotoliquorstore.com/Themes/StoreThemeCss/images/beer.png" title="Beer"/>
            <Cards img="https://content.gotoliquorstore.com/Themes/StoreThemeCss/images/wine.png" title="Wine"/>
            <Cards img="https://content.gotoliquorstore.com/Themes/StoreThemeCss/images/spirits.png" title="Spirits"/>
            <Cards img="https://content.gotoliquorstore.com/Themes/StoreThemeCss/images/extras.png" title="Extras"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
