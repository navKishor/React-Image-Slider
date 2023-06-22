import React from 'react';
import Image1 from "./Components/images/img_1.jpg";
import Image2 from "./Components/images/img_2.jpg";
import Image3 from "./Components/images/img_3.jpg";
import Image4 from "./Components/images/img_4.jpg";
import Image5 from "./Components/images/img_5.jpg";
import Image6 from "./Components/images/img_6.jpg";
import Image7 from "./Components/images/img_7.jpg";
import "./App.css";
import ImageCarousel from './Components/ImageCaraousal';


const App = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  return (
    <div className="app">
      <div class="four">
      <h1><span>Beautiful Slides</span> React <em>Image</em> Slider</h1>
    </div>
      <ImageCarousel images={images} />
      </div>
  );
};

export default App;
