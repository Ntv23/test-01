import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import i1 from "./images/i1.png";
import i2 from "./images/i2.png";
import i3 from "./images/i3.png";
import i4 from "./images/i4.png";
import i5 from "./images/i5.png";
import i6 from "./images/i6.png";

const leftSlideIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};
const rightSlideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const MainContainer = () => {
  return (
    <main className="w-full mx-auto flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center text-center">
        <div
          style={{ backgroundImage: "url('./images/pat.png')" }}
          className="bg-cover bg-center p-8"
        >
          <h1 className="font-bold text-[3rem]">OGAWA</h1>
          <p className="text-gray-400">
            OGAWA takes pride in creating revolutionary ideas to innovate and
            exceptional engineering practices to deliver the
            <span className="hidden md:inline">
              {" "}
              <br />
            </span>
            ultimate rejuvenating experiences.
          </p>
          <img src={i1} alt="OGAWA" />
        </div>
        {/* Master Drive */}
        <motion.div
          variants={leftSlideIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10"
        >
          {/* LEFT */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 order-1 md:order-1"
            variants={leftSlideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={i2} alt="OGAWA" />
          </motion.div>
          {/* RIGHT */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 order-2 md:order-2"
            variants={rightSlideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[2rem]">MASTER DRIVE SERIES</h1>
            <h3 className="text-gray-400">More than A.I</h3>
            <p className="text-sm">
              Discover the Technology of Tomorrow, for the Best Massage Today.
              Each Master Drive is built to be ‘different’. Engineered with
              state-of-the-art technology, indulge in the best massage
              experience that is unique to each individual user.
            </p>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button className="rounded-full border border-[#5B7D3E] flex items-center justify-center px-4 py-2 mt-5 shadow-lg">
                <span>See More</span>
                <IoIosArrowRoundForward className="w-[20px] h-[20px] ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Foot */}
        <motion.div
          variants={leftSlideIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 mb-10"
        >
          {/* LEFT */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 order-2 md:order-1"
            variants={leftSlideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[2rem]">FOOT SERIES</h1>
            <h3 className="text-gray-400">Safe & Caring</h3>
            <p className="text-sm">
              Innovative design and adaptive functionality, get total
              rejuvenation and maximum massage coverage for your entire legs.
            </p>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button className="rounded-full border border-[#5B7D3E] flex items-center justify-center px-4 py-2 mt-5">
                <span>See More</span>
                <IoIosArrowRoundForward className="w-[20px] h-[20px] ml-2" />
              </button>
            </motion.div>
          </motion.div>
          {/* RIGHT */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 order-1 md:order-2"
            variants={rightSlideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={i3} alt="OGAWA" />
          </motion.div>
        </motion.div>

        {/* Mobile */}
        <motion.div
          variants={leftSlideIn}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center md:space-y-0 md:space-x-10"
        >
          {/* LEFT */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 order-1 md:order-1"
            variants={leftSlideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={i4} alt="OGAWA" />
          </motion.div>
          {/* RIGHT */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/2 order-2 md:order-2"
            variants={rightSlideIn}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-[2rem]">MOBILE SERIES</h1>
            <h3 className="text-gray-400">Excite your journey</h3>
            <p className="text-sm">
              Designed specifically to meet the demands of a digital and
              sedentary lifestyle.
            </p>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button className="rounded-full border border-[#5B7D3E] flex items-center justify-center px-4 py-2 mt-5">
                <span>See More</span>
                <IoIosArrowRoundForward className="w-[20px] h-[20px] ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Our Collection */}
        <div className="w-full hidden md:flex flex-col items-center justify-center">
          <h2 className="text-[2rem] font-bold text-center">Our Collection</h2>
          <div className="flex flex-wrap justify-center mt-10">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
              <div className="relative rounded-lg shadow-lg aspect-w-16 aspect-h-9">
                <img
                  src={i6}
                  alt="AI Collection"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 rounded-lg text-center">
                  <h3 className="text-white text-3xl font-bold">AI</h3>
                  <p className="text-gray-200">VIEW ALL COLLECTIONS</p>
                  <motion.div
                    className="box mt-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <button className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-full flex items-center justify-center">
                      Discover More <IoIosArrowRoundForward className="ml-2" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
              <div className="relative rounded-lg shadow-lg aspect-w-16 aspect-h-9">
                <img
                  src={i5}
                  alt="Other Collection"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/3 p-2 flex items-center justify-center">
              <div className="relative rounded-lg shadow-lg aspect-w-16 aspect-h-9">
                <img
                  src={i5}
                  alt="Another Collection"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden w-full mt-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: null,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={i3} alt="OGAWA" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i2} alt="OGAWA" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={i4} alt="OGAWA" />
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col items-center justify-center mb-10">
          <h3 className="text-black text-3xl font-bold">AI</h3>
          <p className="text-gray-300">VIEW ALL COLLECTIONS</p>
        </div>
      </div>
    </main>
  );
}

export default MainContainer;
