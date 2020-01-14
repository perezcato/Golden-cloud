import React, {useState} from "react";
import Lightbox from "react-image-lightbox";

import london from "../assets/images/tours/bali.jpg";
import france from "../assets/images/tours/sao.jpg";
import singapore from "../assets/images/tours/sg.jpg";
import dubai from "../assets/images/tours/db.jpg";

import "react-image-lightbox/style.css";


const images = [
    france,
    singapore,
    london,
    dubai
];


export default function OurPackages() {
  const [photoIndex,setPhotoIndex] = useState(0);
  const [isOpen,setIsOpen] = useState(false);

  return (
    <section id="our-packages" className="px-6 pb-5 mt-10 lg:px-12 xl:px-16 lg:pt-10 lg:pb-10 z-0 ">
      {isOpen && (
          <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() => setPhotoIndex((photoIndex+ images.length - 1)%images.length)}
              onMoveNextRequest={() => setPhotoIndex((photoIndex + 1)% images.length)}
          />
      )}
      <div className="packages-title text-center">
        <h2 className="font-extrabold uppercase text-xl lg:text-3xl">
          Upcoming Tours
        </h2>
        <h3 className="font-light text-sm lg:text-base">Destinations</h3>
      </div>
      <div className="lg:flex md:flex-wrap lg:justify-between md:flex md:justify-between block mt-6">
        <div
          className="h-ch1 lg:h-67 md:h-67 z-0 w-full relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '400px'
          }}
        >
          <div
              onClick={()=> {
                setPhotoIndex(1);
                setIsOpen(true);
              }}
            className="place-image bg-cover bg-center cursor-pointer h-p6 lg:h-p5 relative"
            style={{ backgroundImage: `url(${singapore})` }}
          >
          </div>
          <div className="content w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-sm md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
                Trip to Singapore
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
                A land with futuristic marvels, Singapore is ahead of one’s time.
                With the brilliantly lit lights highlighting its modern architectures
            </p>
              <hr className="mt-2 mb-2"/>
              <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light">
                  <span className="text-primarycolor text-xs lg:text-base">50%</span> - registration<br/>
                  <span className="text-primarycolor text-xs lg:text-base">01/01/2020 </span> - deadline <br/>
                  <span className="text-primarycolor text-xs lg:text-base"> 5%  </span> - discount couples
              </p>
          </div>
        </div>
        <div
          className="h-ch1 lg:h-67 md:h-67 relative z-0 w-full mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '400px'
          }}
        >
          <div
              onClick={()=> {
                setPhotoIndex(3);
                setIsOpen(true);
              }}
            className="place-image bg-cover cursor-pointer bg-center h-p6 lg:h-p5 relative"
            style={{ backgroundImage: `url(${dubai})` }}
          >
          </div>
          <div className="content w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-sm md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
                Trip to Dubai
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
                Visit interesting places like the Burj Al Arab hotel, the Artificial Palm Island in dubai
                the world largest mall and many more whiles in dubai
            </p>
              <hr className="mt-2 mb-2"/>
              <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light">
                  <span className="text-primarycolor text-xs lg:text-base">25%</span> - registration <br/>
                  <span className="text-primarycolor text-xs lg:text-base">29/02/2020 </span> - deadline
              </p>
          </div>
        </div>
        <div
          className="h-ch1 lg:h-67 md:h-67 relative z-0 w-full mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
          style={{
            transition: "all 0.5s ease-in-out",
            minHeight: '400px'
          }}
        >
          <div
              onClick={()=> {
                setPhotoIndex(0);
                setIsOpen(true);
              }}
            className="place-image bg-cover cursor-pointer bg-center h-p6 lg:h-p5  relative"
            style={{ backgroundImage: `url(${france})` }}
          >
          </div>
          <div className="w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-sm md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">
                Trip to Sao Tome
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">
                gorgeous golden-sand beaches to the mix, rare sea turtles and beautiful mountain towns, the
                 volcanic mountains, rare monkeys becomes pretty darn hard to resist
            </p>
              <hr className="mt-2 mb-2"/>
              <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light">
                  <span className="text-primarycolor text-xs lg:text-base">25%</span> - registration <br/>
                  <span className="text-primarycolor text-xs lg:text-base">30/05/2020 </span> - deadline
              </p>
          </div>
        </div>
        <div
            className="h-ch1 lg:h-67 md:h-67 z-0 w-full mb-6 lg:mb-0 relative lg:w-p2-5 md:w-p4.5 shadow-xl"
            style={{
              transition: "all 0.5s ease-in-out",
              minHeight: '400px'
            }}
        >
          <div
              onClick={()=> {
                setPhotoIndex(2);
                setIsOpen(true);
              }}
              className="place-image bg-cover cursor-pointer bg-center h-p6 lg:h-p5 relative"
              style={{ backgroundImage: `url(${london})` }}
          >
          </div>
          <div className="content w-full px-4 text-left pt-2 h-p4 lg:h-p5">
            <h2 className="text-sm md:text-base lg:text-lg font-bold md:mb-1 text-primarycolor">

                Trip to Bali
            </h2>
            <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light capitalize text-left">

                Bali has a huge number of other attractions to enjoy such as temples, caves, waterfalls, museums, and markets.
            </p>
              <hr className="mt-2 mb-2"/>
              <p className="text-xs lg:text-xs xl:text-sm md:text-xs font-light">
                  <span className="text-primarycolor text-xs lg:text-base">25%</span> - registration <br/>
                  <span className="text-primarycolor text-xs lg:text-base">12/01/2020 </span> - deadline
              </p>

          </div>
        </div>
      </div>
    </section>
  );
}
