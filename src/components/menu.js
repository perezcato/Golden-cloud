import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-scroll";

export default function Menu() {
  const close = () => {
      const menu = document.getElementById('menu');
      menu.classList.add('hidden');
  };
  return (
    <div id="menu" className="h-screen hidden w-screen bg-black fixed top-0 left-0 z-50 text-white flex justify-center">
      <button
        onClick={close}
        className=" absolute text-3xl"
        style={{ right: "1rem", top: "0.4rem", cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <ul className="mt-24">
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


// mb-4 text-3xl
