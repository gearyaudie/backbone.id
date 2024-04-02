import React, { useState, useEffect } from 'react';

const LaptopProjects = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="relative w-full max-w-[1000px] h-auto top-0 text-center px-8 z-0">
      <img
        src={images[currentImageIndex]}
        alt="Slider Image"
        className="w-full h-auto"
      />
    </div>
  );
};

export default LaptopProjects;
