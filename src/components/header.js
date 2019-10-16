import React from "react";
import siteLogg from "../assets/images/bg2.png";
import { Link} from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const toggleMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.remove('hidden');
  };

  return (
    <div
      className="flex w-full items-center justify-between shadow z-10 px-6 lg:px-12 xl:px-16 lg:flex lg:justify-between lg:items-center lg:flex-row"
      style={{ backgroundColor: "rgba(255,255,255,1)", boxSizing: 'border-box' }}
    >
      <img
        src={siteLogg}
        alt="logo of golden travel and tours"
        className="w-16 h-16"
      />

      <button onClick={toggleMenu} className="lg:hidden cursor-pointer" >
        <FontAwesomeIcon icon={faBars}/>
      </button>
      <ul className="lg:flex hidden">
        <li className="mr-8 hover:text-primarycolor uppercase text-gray-800 font-bold text-sm">
          <Link
            to="our-banner"
            activeClass="text-primarycolor"
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-primarycolor cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="hover:text-primarycolor mr-8 uppercase text-gray-800 font-bold text-sm">
          <Link
            to="our-packages"
            activeClass="text-primarycolor"
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-primarycolor cursor-pointer"
          >
            Tours
          </Link>
        </li>
        <li className=" hover:text-primarycolor mr-8 uppercase text-gray-800 font-bold text-sm">
          <Link
              to="our-accommodation"
              activeClass="text-primarycolor"
              spy={true}
              smooth={true}
              duration={1000}
              className="hover:text-primarycolor cursor-pointer"
          >
            Accommodation
          </Link>
        </li>
        <li className=" hover:text-primarycolor mr-8 uppercase text-gray-800 font-bold text-sm">
          <Link
            to="our-places"
            activeClass="text-primarycolor"
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-primarycolor cursor-pointer"
          >
            Events
          </Link>
        </li>
        <li className=" hover:text-primarycolor uppercase text-gray-800 font-bold text-sm">
          <Link
              activeClass="text-primarycolor"
            to="about-us"
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-primarycolor cursor-pointer"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}




