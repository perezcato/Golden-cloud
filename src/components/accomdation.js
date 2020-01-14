import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";



import london from "../assets/images/tours/bali.jpg";
import france from "../assets/images/tours/sao.jpg";
import singapore from "../assets/images/tours/sg.jpg";
import dubai from "../assets/images/tours/db.jpg";

export default function Accomodation() {
  return (
    <section id="our-accommodation" className="px-6 pt-10 pb-5 lg:px-12 xl:px-16 lg:pt-20 lg:pb-10 z-0 ">
      <div className="packages-title text-left">
        <h2 className="font-extrabold uppercase text-xl lg:text-2xl">
          Popular Tours
        </h2>
        <h3 className="font-light text-sm lg:text-base">Top Destinations</h3>
      </div>
      <div className="lg:flex md:flex-wrap lg:justify-between md:flex md:justify-between block mt-6">
        <div
          className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '256px'
          }}
        >
          <div
            className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
            style={{ backgroundImage: `url(${london})` }}
          >
            <div
              className="w-full h-full rounded"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <p
                style={{ right: "0.5rem", top: "0.5rem" }}
                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
              >
                9.0
              </p>
              <div className="absolute bottom-0 left-0 w-full px-4">
                <p className="text-xs capitalize text-left">
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                </p>
                <h2 className="text-base lg:text-lg font-normal text-white">
                  Villa Monticello
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '256px'
          }}
        >
          <div
            className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
            style={{ backgroundImage: `url(${france})` }}
          >
            <div
              className="w-full h-full rounded"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <p
                style={{ right: "0.5rem", top: "0.5rem" }}
                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
              >
                9.4
              </p>
              <div className="absolute bottom-0 left-0 w-full px-4">
                <p className="text-xs capitalize text-left">
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                </p>
                <h2 className="text-base lg:text-lg font-normal text-white">
                  Kempiski
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '256px'
          }}
        >
          <div
            className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
            style={{ backgroundImage: `url(${singapore})` }}
          >
            <div
              className="w-full h-full rounded"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <p
                style={{ right: "0.5rem", top: "0.5rem" }}
                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
              >
                9.3
              </p>
              <div className="absolute bottom-0 left-0 w-full px-4">
                <p className="text-xs capitalize text-left">
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                </p>
                <h2 className="text-base lg:text-lg font-normal text-white">
                  Accra Mariott Hotel
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '256px'
          }}
        >
          <div
            className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
            style={{ backgroundImage: `url(${dubai})` }}
          >
            <div
              className="w-full h-full rounded"
              style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
            >
              <p
                style={{ right: "0.5rem", top: "0.5rem" }}
                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
              >
                9.0
              </p>
              <div className="absolute bottom-0 left-0 w-full px-4">
                <p className="text-xs capitalize text-left">
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-primarycolor"
                    icon={faStar}
                  />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                    <FontAwesomeIcon
                        className="text-primarycolor"
                        icon={faStar}
                    />
                </p>
                <h2 className="text-base lg:text-lg font-normal text-white">
                  Labadi Beach hotel
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
