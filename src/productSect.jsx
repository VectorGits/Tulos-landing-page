import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSect = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const items = [
    {
      title: 'MEN',
      image: '/man.jpeg',
      link: '#',
      desc: 'Male-model',
    },
    {
      title: 'WOMEN',
      image: '/woman.jpeg',
      link: '#',
      desc: 'Female-model',
    },
    {
      title: 'KIDS',
      image: '/kid.jpeg',
      link: '#',
      desc: 'Kid-model',
    },
  ];

  return (
    <div className="mx-5 my-8">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={item.image} alt={item.desc} className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 text-white py-6 ml-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <button className="mt-2 px-4 py-2 bg-white text-black font-semibold rounded-full shadow">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSect;
