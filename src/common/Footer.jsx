import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import footerlogo from "../assets/images/sakroob.png";

export default function Footer() {
  return (
    <footer className="bg-[#112D49] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2">
          <img src={footerlogo} alt="Logo" className="" />
          <p className="text-gray-300 text-sm max-w-md">
            Commodo egestas etiam arcu curabitur aliquam volutpat a gravida.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-gray-300">
            Shipping
          </a>
          <a href="#" className="hover:text-gray-300">
            Warranty
          </a>
          <a href="#" className="hover:text-gray-300">
            FAQs
          </a>
          <a href="#" className="hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
        <div className="flex space-x-4 text-lg">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-400 rounded-full hover:bg-gray-700"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-400 rounded-full hover:bg-gray-700"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-400 rounded-full hover:bg-gray-700"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 border border-gray-400 rounded-full hover:bg-gray-700"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="border-t border-[#FFFFFF] mt-8 pt-4 px-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        <div className="flex space-x-4 mb-3 md:mb-0">
          <a href="#" className="hover:text-gray-300">
            Term of Service
          </a>
          <span>|</span>
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>
        <p className="text-[#FFFFFF]">© 2025 Skaroob. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
