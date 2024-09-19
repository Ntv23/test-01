import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Live Better And Healthier",
      paragraph: "SCROLL DOWN",
    },
    {
      title: "Slide 2",
      paragraph: "SCROLL DOWN",
    },
    {
      title: "Slide 3",
      paragraph: "SCROLL DOWN",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto mt-10">
      <div className="bg-gray-300 p-8 rounded-lg text-center w-full h-[500px] md:h-[780px] flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-grow flex items-center justify-center"
        >
          <h2 className="text-5xl font-bold text-gray-50">
            {slides[currentIndex].title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button className="mt-6 bg-white bg-opacity-50 shadow text-gray-500 px-6 py-2 rounded-full flex items-center">
              <span>Learn More</span>
              <IoIosArrowRoundForward className="w-[20px] h-[20px]" />
            </button>
          </motion.div>

          <div className="hidden sm:flex justify-center mt-4">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                  index === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <p className="mt-4 text-gray-50 text-xs hidden sm:block">
            {slides[currentIndex].paragraph}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
