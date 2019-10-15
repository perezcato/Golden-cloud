import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <li className="mb-4 text-3xl">
          <a href="#">Home</a>
        </li>
        <li className="mb-4 text-3xl">
          <a href="#">About Us</a>
        </li>
        <li className="mb-4 text-3xl">
          <a href="#">Tours</a>
        </li>
        <li className="mb-4 text-3xl">
          <a href="#">Services</a>
        </li>
        <li className="mb-4 text-3xl">
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
}
