import React, { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";
import certificate from "../images/certificate.png";

const Footer = () => {

  const [openSection, setOpenSection] = useState(null);


  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#292929] text-gray-400 pt-10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="hidden md:grid grid-cols-4 gap-8">
          {/* Products Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">PRODUCTS</h4>
            <ul>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Massage Chairs
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Foot Massager
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Sport Series
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Mobile Series
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Handy Massage
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Beauty Series
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Home Series
              </li>
            </ul>
          </div>
          {/* Shop Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SHOP</h4>
            <ul>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Our Showroom
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Shop Online
              </li>
            </ul>
            {/* Promotion Section */}
            <h4 className="text-lg font-semibold mb-4 mt-8">PROMOTION</h4>
            <ul>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Monthly Promo
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Experiential Program
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4">FAQ</h4>
            <ul>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Payments
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Terms & Conditions
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Privacy Policy
              </li>
              <li className="mb-2 hover:underline cursor-pointer flex items-center">
                <IoIosArrowForward className="w-[20px] h-[20px] mr-1" />
                Trade In Policy
              </li>
            </ul>
          </div>
          <div className="mt-48">
            <img
              src={certificate}
              alt="Other Collection"
              className="w-50 h-auto"
            />
          </div>
        </div>

        <div className="md:hidden">
          {/* Products Section */}
          <div className="mb-6">
            <h4
              onClick={() => toggleSection("products")}
              className="text-md font-semibold cursor-pointer flex justify-between items-center"
            >
              PRODUCTS
              <span>
                {openSection === "products" ? (
                  <IoIosArrowUp className="w-5 h-5" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5" />
                )}
              </span>
            </h4>
            {openSection === "products" && (
              <ul className="mt-2 text-sm">
                <li className="mb-2 hover:underline cursor-pointer">
                  Massage Chairs
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Foot Massager
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Sport Series
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Mobile Series
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Handy Massage
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Beauty Series
                </li>
                <li className="hover:underline cursor-pointer">Home Series</li>
              </ul>
            )}
          </div>

          {/* Shop Section */}
          <div className="mb-6">
            <h4
              onClick={() => toggleSection("shop")}
              className="text-md font-semibold cursor-pointer flex justify-between items-center"
            >
              SHOP
              <span>
                {openSection === "shop" ? (
                  <IoIosArrowUp className="w-5 h-5" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5" />
                )}
              </span>
            </h4>
            {openSection === "shop" && (
              <ul className="mt-2 text-sm">
                <li className="mb-2 hover:underline cursor-pointer">
                  Our Showroom
                </li>
                <li className="hover:underline cursor-pointer">Shop Online</li>
              </ul>
            )}
          </div>

          {/* Promotion Section */}
          <div className="mb-6">
            <h4
              onClick={() => toggleSection("promotion")}
              className="text-md font-semibold cursor-pointer flex justify-between items-center"
            >
              PROMOTION
              <span>
                {openSection === "promotion" ? (
                  <IoIosArrowUp className="w-5 h-5" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5" />
                )}
              </span>
            </h4>
            {openSection === "promotion" && (
              <ul className="mt-2 text-sm">
                <li className="mb-2 hover:underline cursor-pointer">
                  Monthly Promo
                </li>
                <li className="hover:underline cursor-pointer">
                  Experiential Program
                </li>
              </ul>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <h4
              onClick={() => toggleSection("faq")}
              className="text-md font-semibold cursor-pointer flex justify-between items-center"
            >
              FAQ
              <span>
                {openSection === "faq" ? (
                  <IoIosArrowUp className="w-5 h-5" />
                ) : (
                  <IoIosArrowDown className="w-5 h-5" />
                )}
              </span>
            </h4>
            {openSection === "faq" && (
              <ul className="mt-2 text-sm">
                <li className="mb-2 hover:underline cursor-pointer">
                  Payments
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="mb-2 hover:underline cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:underline cursor-pointer">
                  Trade In Policy
                </li>
              </ul>
            )}
          </div>
          <div className="flex justify-center mb-6">
            <img
              src={certificate}
              alt="Other Collection"
              className="w-50 h-auto"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#333333] h-20 mt-5">
        <p className="text-md">&copy; 2022 Ogawa. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
