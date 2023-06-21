import { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      // Automatically rotate images every 3 seconds
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [images.length]);
  
    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="caraosal">
  
      <div className="image-carousel">
        <button className="previous-button" onClick={goToPreviousImage}>
          Previous
        </button>
        <div className="carousel-card">
          <img className="carousel-image" src={images[currentImageIndex]} alt="Carousel" />
        </div>
        <button className="next-button" onClick={goToNextImage}>
          Next
        </button>
      </div>
      </div>
    );
  };
  export default ImageCarousel;