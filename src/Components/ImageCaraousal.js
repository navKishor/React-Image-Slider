import { useEffect, useState } from "react";

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lastIndex = images.length - 1;
    useEffect(() => {
      // Automatically rotate images every 3 seconds
        setInterval(() => {
        setCurrentImageIndex((current) =>
          current === lastIndex ? 0 : current + 1
        );
      }, 3000);  
    }, []);
  
    const goToPreviousImage = () => {
      setCurrentImageIndex((current) =>
        current === 0 ? lastIndex : current - 1
      );
    };
  
    const goToNextImage = () => {
      setCurrentImageIndex((current) =>
        current === lastIndex ? 0 : current + 1
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