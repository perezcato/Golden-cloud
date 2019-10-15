import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./css.css";

export default function Info() {
  return (
    <div
      className=" bg-primarycolor py-2 w-full px-6 lg:px-24 lg:py-2 z-10 md:flex md:flex-row md:justify-around lg:flex lg:flex-row lg:justify-around"
      style={{ boxSizing: "border-box" }}
    >
      <div className=" flex justify-between items-center flex-1 w-full lg:flex-1 lg:flex lg:justify-start  lg:flex-row md:flex-1 md:flex md:justify-start  md:flex-row">
        <div className="lg:flex flex flex items-center justify-center lg:items-center lg:justify-center">
          <FontAwesomeIcon
            className="lg:text-base text-xs"
            icon={faPhoneAlt}
            color="white"
          />
          <h4 className="text-white lg:ml-2 ml-2 lg:text-xs lg:font-light text-xs">
            +(233) 23 456 7890
          </h4>
        </div>
        <div className="lg:flex flex items-center justify-center md:ml-8 lg:ml-8 lg:items-center lg:flex-row  lg:justify-center">
          <FontAwesomeIcon
            className="lg:text-lg text:xs"
            icon={faEnvelope}
            color="white"
          />
          <p className="text-white ml-2 lg:ml-2 lg:text-xs font-light lg:tracking-wider text-xs">
            info@goldencloud.com
          </p>
        </div>
      </div>
      <div className=" hidden lg:flex md:flex md:justify-center md:flex-1 md:info-social lg:justify-center lg:flex-1 lg:info-social">
        <FontAwesomeIcon className="text-white lg:mr-4 md:mr-4" icon={faFacebookF} />
        <FontAwesomeIcon className="text-white" icon={faTwitter} />
        <FontAwesomeIcon className="text-white md:ml-4 lg:ml-4" icon={faInstagram} />
      </div>
    </div>
  );
}
