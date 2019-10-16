import React from "react";

import london from "../assets/images/tours/london.jpg";
import france from "../assets/images/tours/eiffeltower.jpg";
import singapore from "../assets/images/tours/singapore.jpg";
import dubai from "../assets/images/tours/dubai.jpg";

export default function OurPackages() {
  return (
    <section id="our-packages" className="px-6 pt-10 pb-5 lg:px-12 xl:px-16 lg:pt-20 lg:pb-10 z-0 ">
      <div className="packages-title text-center">
        <h2 className="font-extrabold uppercase text-xl lg:text-3xl">
          Our Popular Tours
        </h2>
        <h3 className="font-light text-sm lg:text-base">Top Destinations</h3>
      </div>
      <div className="lg:flex md:flex-wrap lg:justify-between md:flex md:justify-between block mt-6">
        <div
          className="h-ch1 lg:h-67 md:h-67 z-0 w-full relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out"
          }}
        >
          <div
            className="place-image bg-cover bg-center h-p6 lg:h-p5 relative"
            style={{ backgroundImage: `url(${france})` }}
          >
          </div>
          <div className="content w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-xs md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
              Trip to Paris
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
              Other interesting attractions include the louvre museum & the Notre-Dame Cathedral,
              the Arc de Triomphe - Champs- Elysees, the wall of love and many more
            </p>
          </div>
        </div>
        <div
          className="h-ch1 lg:h-67 md:h-67 relative z-0 w-full mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out"
          }}
        >
          <div
            className="place-image bg-cover bg-center h-p6 lg:h-p5 relative"
            style={{ backgroundImage: `url(${singapore})` }}
          >
          </div>
          <div className="content w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-xs md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
              Trip to Singapore
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
              A land with futuristic marvels, Singapore is ahead of one’s time.
              With the brilliantly lit lights that sway around at night highlighting its modern architectures
            </p>
          </div>
        </div>
        <div
          className="h-ch1 lg:h-67 md:h-67 relative z-0 w-full mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out"
          }}
        >
          <div
            className="place-image bg-cover bg-center h-p6 lg:h-p5  relative"
            style={{ backgroundImage: `url(${london})` }}
          >
          </div>
          <div className="w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-xs md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
              Trip to London
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
              Whiles in London you can visit the Big Ben, the houses of parliament, visit the Queen at the Buckingham Palace,
              pass through the London eye and many more before you return
            </p>
          </div>
        </div>
        <div
            className="h-ch1 lg:h-67 md:h-67 z-0 w-full mb-6 lg:mb-0 relative lg:w-p2-5 md:w-p4.5 shadow-xl"
            style={{
              transition: "all 0.5s ease-in-out"
            }}
        >
          <div
              className="place-image bg-cover bg-center h-p6 lg:h-p5 relative"
              style={{ backgroundImage: `url(${dubai})` }}
          >
          </div>
          <div className="content w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-xs md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
              Trip to Dubai
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
              Visit interesting places like the Burj Al Arab hotel, the Artificial Palm Island in dubai
              the world largest mall and many more whiles in dubai
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}
