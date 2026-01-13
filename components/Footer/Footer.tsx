import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Logo</h2>
          <p className="mt-4 text-sm leading-relaxed">
            Premium quality furniture crafted for comfort, style, and modern
            living.
          </p>

          <div className="flex space-x-4 mt-4">
            <Link href="#" className="hover:text-white">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-white">
              <BsTwitterX />
            </Link>
            <Link href="#" className="hover:text-white">
              <RiInstagramFill />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/category/sofa" className="hover:text-white">
                Sofas
              </Link>
            </li>
            <li>
              <Link href="/category/chair" className="hover:text-white">
                Chairs
              </Link>
            </li>
            <li>
              <Link href="/category/table" className="hover:text-white">
                Tables
              </Link>
            </li>
            <li>
              <Link href="/category/bed" className="hover:text-white">
                Beds
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <IoLocationSharp />
              Dhaka, Bangladesh
            </li>
            <li className="flex gap-2">
              <MdLocalPhone />
              +880 1234-567890
            </li>
            <li className="flex gap-2">
              <CgMail />
              support@furniturestore.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FurnitureStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
