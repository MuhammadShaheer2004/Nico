// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import { useEffect } from 'react';
import $ from 'jquery';
import "./carousel.css";
import "./slider.js";

export default function SimpleSlider() {

  useEffect(() => {
    // $('.slider-for').slick({
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   arrows: false,
    //   fade: true,
    //   asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   asNavFor: '.slider-for',
    //   dots: true,
    //   focusOnSelect: true
    // });
   
    // $('a[data-slide]').click(function(e) {
    //   e.preventDefault();
    //   var slideno = $(this).data('slide');
    //   $('.slider-nav').slick('slickGoTo', slideno - 1);
    // });

  }, [])


  
  return (
    <>
      <div className="main">
        <div className="slider slider-for">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </div>
        <div className="slider slider-nav">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
        </div>
        <div className="action">
          <a href="#" data-slide="3">go to slide 3</a>
          <a href="#" data-slide="4">go to slide 4</a>
          <a href="#" data-slide="5">go to slide 5</a>
        </div>
      </div>
    </>
  )
}


// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }