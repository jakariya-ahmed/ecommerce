// src/components/HeroSlider.jsx
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import banner1 from '../assets/banner/banner.jpg';
import banner2 from '../assets/banner/banner-1.jpg';
import banner3 from '../assets/banner/banner-2.jpg';

// src/components/HeroSlider.jsx

const fakeSlidesAPI = [
  {
    id: 1,
    title: 'Explore the Latest Electronics',
    subtitle: 'Top quality gadgets at unbeatable prices!',
    image: banner1, // ✅ local image
    link: '/products/electronics',
  },
  {
    id: 2,
    title: 'Stylish Fashion Sale',
    subtitle: 'Stay trendy with up to 50% off!',
    image: banner2,
    link: '/products/fashion',
  },
  {
    id: 3,
    title: 'Furniture for Every Room',
    subtitle: 'Upgrade your space with comfort and style.',
    image: banner3,
    link: '/products/furniture',
  },
];


export default function HeroSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setSlides(fakeSlidesAPI);
    }, 300);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="overflow-hidden max-w-screen">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[400px] md:h-[500px] object-cover object-center rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4 py-6">
              <h2 className="text-2xl md:text-4xl font-bold mb-2 animate-slide-up">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg mb-4 animate-slide-up delay-100">
                {slide.subtitle}
              </p>
              <Link
                to={slide.link}
                className="px-6 py-2 bg-blue-800 text-white rounded hover:bg-orange-500 transition animate-slide-up delay-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
