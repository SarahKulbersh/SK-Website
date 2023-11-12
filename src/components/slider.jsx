//https://github.com/leandrowd/react-responsive-carousel
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

function b(){
  alert("got clicked");
}

const responsive = {
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
    require('../files/Chani.gif'),
  },
  {
    url:
    require('../files/Racheli.gif')
  },
  //Second image url
  {
    url:
    require('../files/Pre-comp 2_1.gif')
  },
  //Third image url
  {
    url:
    require('../files/ez.gif')
  },

  //Fourth image url

  {
    url:
    require('../files/sk.gif')
  },
  {
    url:
    require('../files/tb.gif')
  },
  {
    url:
    require('../files/mm.gif')
  }
];
const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" id="frame" onClick={b} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
