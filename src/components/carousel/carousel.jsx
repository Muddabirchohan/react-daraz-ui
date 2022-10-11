import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from "./../../images/slider1.png"
import slider2 from "./../../images/slider2.jpg"


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000


    };
    return (
      <div className="slider-parent">
        <Slider {...settings}>
          <div>
            <img src={slider1}/>
          </div>
          <div>
          <img src={slider2}/>
          </div>
        </Slider>
      </div>
    );
  }
}