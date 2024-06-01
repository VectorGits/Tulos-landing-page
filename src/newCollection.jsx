import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useWindowWidth from './windowwidth';

const NewCollection = () => {
  const products = [
    {
      name: "Loro Piana",
      price: "$45",
      image: "./loro_piana-shirt.jpeg",
      description: "Polo shirts with a classic look.",
    },
    {
      name: "White Pants",
      price: "$90",
      image: "./white_pants.jpeg",
      description: "Elegant white pants.",
    },
    {
      name: "Bikha Glasses",
      price: "$50",
      image: "./bikha_glasses.jpeg",
      description: "Stylish glasses with black frames.",
    },
    {
      name: "Brown Bomber",
      price: "$52",
      image: "./brown_bomber-jacket.jpeg",
      description: "Warm and stylish brown bomber jacket.",
    },
    {
      name: "Leather Shoes Jack",
      price: "$80",
      image: "./leather_shoes.jpeg",
      description: "Comfortable and stylish leather shoes.",
    },
    {
      name: "Grey T-shirt",
      price: "$21",
      image: "./grey_tshirt.jpeg",
      description: "Casual grey T-shirt.",
    },
  ];

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

  const windowWidth = useWindowWidth();

  return (
    <div className="container mt-10 mx-auto py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">NEW COLLECTION</h2>
      {windowWidth < 1024 ? (
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-2">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.name}</div>
                  <p className="text-gray-700 text-base">{product.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full h-64 object-cover" src={product.image} alt={product.name} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewCollection;
