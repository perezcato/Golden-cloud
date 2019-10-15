import React from "react";

import bg from "../assets/images/bg4.jpg";

export default function OurPackages() {
  return (
    <section className="px-6 pt-10 pb-5 lg:px-24 lg:pt-20 lg:pb-10 z-0 ">
      <div className="packages-title text-left">
        <h2 className="font-extrabold uppercase text-xl lg:text-3xl">
          Our Packages
        </h2>
        <h3 className="font-light text-sm lg:text-base">Top Destinations</h3>
      </div>
      <div className="lg:flex lg:justify-between md:flex md:justify-between block mt-6">
        <div
          className="border h-ch1 lg:h-ch z-0 w-full mb-6 lg:mb-0 lg:w-cw md:w-p2-5 rounded-lg border-primarycolor hover:shadow-2xl"
          style={{
            transition: "all 0.5s ease-in-out"
          }}
        >
          <div
            className="place-image bg-cover bg-center h-p6 lg:h-p5  rounded-t-lg relative"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div
              className="price absolute py-2 px-2"
              style={{ bottom: "20%", backgroundColor: "rgba(255,0,0,0.5)" }}
            >
              <span className="line-through text-xs text-gray-300">$355</span>{" "}
              <span className="text-white text-base">$355</span>
            </div>
          </div>
          <div className="content w-full px-6 text-left pt-4 h-p4 lg:h-p5">
            <h2 className="text-base lg:text-lg font-extrabold underline mb-1">
              Trip to <span className="text-primarycolor">Dubai</span>
            </h2>
            <p className="text-xs lg:text-sm capitalize text-left">
              Other interesting attractions global village ferrari world & yas
              water world combo atlantis water park lost chamber aquarium combo
              ticket dolphin & seal show
            </p>
          </div>
        </div>
        <div
          className="border h-ch1 lg:h-ch z-0 w-full mb-6 lg:mb-0 lg:w-cw md:w-p2-5 rounded-lg border-primarycolor hover:shadow-2xl"
          style={{
            transition: "all 0.5s ease-in-out"
          }}
        >
          <div
            className="place-image bg-cover bg-center h-p6 lg:h-p5  rounded-t-lg relative"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div
              className="price absolute py-2 px-2"
              style={{ bottom: "20%", backgroundColor: "rgba(255,0,0,0.5)" }}
            >
              <span className="line-through text-xs text-gray-300">$355</span>{" "}
              <span className="text-white text-base">$355</span>
            </div>
          </div>
          <div className="content w-full px-6 text-left pt-4 h-p4 lg:h-p5">
            <h2 className="text-base lg:text-lg font-extrabold underline mb-1">
              Trip to <span className="text-primarycolor">Dubai</span>
            </h2>
            <p className="text-xs lg:text-sm capitalize text-left">
              Other interesting attractions global village ferrari world & yas
              water world combo atlantis water park lost chamber aquarium combo
              ticket dolphin & seal show
            </p>
          </div>
        </div>
        <div
          className="border h-ch1 lg:h-ch z-0 w-full mb-6 lg:mb-0 lg:w-cw md:w-p2-5 rounded-lg border-primarycolor hover:shadow-2xl"
          style={{
            transition: "all 0.5s ease-in-out"
          }}
        >
          <div
            className="place-image bg-cover bg-center h-p6 lg:h-p5  rounded-t-lg relative"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div
              className="price absolute py-2 px-2"
              style={{ bottom: "20%", backgroundColor: "rgba(255,0,0,0.5)" }}
            >
              <span className="line-through text-xs text-gray-300">$355</span>{" "}
              <span className="text-white text-base">$355</span>
            </div>
          </div>
          <div className="content w-full px-6 text-left pt-4 h-p4 lg:h-p5">
            <h2 className="text-base lg:text-lg font-extrabold underline mb-1">
              Trip to <span className="text-primarycolor">Dubai</span>
            </h2>
            <p className="text-xs lg:text-sm capitalize text-left">
              Other interesting attractions global village ferrari world & yas
              water world combo atlantis water park lost chamber aquarium combo
              ticket dolphin & seal show
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
