import React, { useState } from 'react';
import './Footer.scss';
import { certificates } from '../../data';
const Footer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const previousImage = () => {
        setCurrentIndex(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
    };

    const nextImage = () => {
        setCurrentIndex(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slider-container">
            {/* <button className="slider-button" onClick={previousImage} >
                &#8249;
            </button> */}
            {/* <img src={certificates[currentIndex].img} alt="carousel" /> */}
            <div className="slider-image-container">
                <img
                    src={certificates[currentIndex].img}
                    alt={`slider-${certificates[currentIndex].id}`}
                    className={`slider-image ${currentIndex === certificates[currentIndex].id ? 'active' : ''}`}
                />
            </div>
            <button className="slider-button" onClick={nextImage}>
                &#8250;
            </button>
        </div>
    );
};

export default Footer;

/* 
<div className="slider-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slider-${index}`}
            className={`slider-image ${currentImageIndex === index ? 'active' : ''}`}
          />
        ))}
      </div>

*/