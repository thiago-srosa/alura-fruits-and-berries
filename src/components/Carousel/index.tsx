import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import carrosselImg1 from "src/img/carrossel-img1.jpg";
import carrosselImg2 from "src/img/carrossel-img2.jpg";

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="d-block w-100 corousel-image"
          src={carrosselImg1.src}
          alt="First slide"
        />
        <Carousel.Caption className="h-50">
          <h1 className="title-font display-4">Reuse food better!</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="d-block w-100 corousel-image"
          src={carrosselImg2.src}
          alt="Second slide"
        />
        <Carousel.Caption className="h-50">
          <h1 className="title-font display-4">Save and earn in health!</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
