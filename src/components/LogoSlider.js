import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo1 from '../assets/tata-logo-HD.svg';
import logo3 from '../assets/Tata-Steel.svg';
import eskay from '../assets/eskay.png'
import muza from '../assets/muza.png'
import fci from '../assets/FCIlogo.svg'

const logos = [logo1, eskay, logo3, muza, fci];
const logoNames = ['Tata', 'Eskay Resort', 'Tata Steel', 'Muza Hotels', 'Food Corporation Of India'];

const LogoSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint according to your design
        settings: {
          slidesToShow: 1, // Show one slide at a time in mobile mode
        },
      },
    ],
  };

  const logoStyle = {
    width: '100%', // Set the desired width
    height: '200px', // Maintain aspect ratio
  };

  const mobileTextStyle = {
    fontSize: '1.5rem', // Set the desired font size for mobile
  };

  return (
    <Slider {...sliderSettings} className="m-5">
      {logos.map((logo, index) => (
        <div key={index} className="p-2 bg-white">
          <img src={logo} alt={`Logo ${index + 1}`} className="w-full md:h-64" style={logoStyle} />
          <p className="text-center mt-2 text-lg md:text-base" style={mobileTextStyle}>{logoNames[index]}</p>
        </div>
      ))}
    </Slider>
  );
};

export default LogoSlider;
