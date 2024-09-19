import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineMenuFold } from "react-icons/ai";
import logo from "../assets/images/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#", label: "BỘ SƯU TẬP" },
    { href: "#", label: "VỀ CHÚNG TÔI" },
    { href: "#", label: "MUA SẮM" },
    { href: "#", label: "TIN TỨC" },
    { href: "#", label: "CỬA HÀNG" },
    { href: "#", label: "TUYỂN DỤNG" },
    { href: "#", label: "LIÊN HỆ" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-white flex items-center justify-between px-4 py-2 shadow-md h-16">
      <div className="px-4">
        <img src={logo} alt="Other Collection" className="w-50 h-50" />
      </div>
      <div className="hidden md:flex items-center px-4">
        <nav className="space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="text-gray-500 text-sm relative"
              whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block" }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <a href="#" className="text-gray-600 text-sm">
          VIE
        </a>
        <span>|</span>
        <a href="#" className="text-gray-600 text-sm">
          ENG
        </a>
        <a href="#" className="text-gray-600">
          <IoIosSearch className="text-xl" />
        </a>
        <a href="#" className="text-gray-600">
          <HiOutlineShoppingBag className="text-xl" />
        </a>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          <AiOutlineMenuFold className="text-2xl hover:text-[#4B6638]" />
        </button>
      </div>
      <div
        className={`absolute top-16 left-0 w-full bg-white z-10 transition-transform transform ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } origin-top duration-300 md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            BỘ SƯU TẬP
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            VỀ CHÚNG TÔI
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            MUA SẮM
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            TIN TỨC
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            CỬA HÀNG
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            TUYỂN DỤNG
          </motion.a>
          <motion.a
            href={"#"}
            className="text-gray-500 text-sm relative"
            whileHover={{ scale: 1.1, color: "#6C9345", fontWeight: 700 }}
            transition={{ duration: 0.2 }}
          >
            LIÊN HỆ
          </motion.a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
