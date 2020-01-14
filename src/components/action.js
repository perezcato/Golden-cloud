import React from "react";
import adventure from "../assets/images/adventure.jpg";

export default function Action() {
  return (
    <section
      className="px-6 h-ch1 lg:h-67 md:h-67 pt-5 pb-5 lg:px-12 xl:px-16 lg:pt-20 z-0 "
      style={{minHeight: '350px'}}
    >
      <div className="bg-center bg-cover w-full h-full shadow-2xl" style={{ backgroundImage: `url(${adventure})` }} >
          <div className="w-full pt-20 h-full text-center" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
              <div className="leading-tight mt-3 text-white">
                  <p className="font-semibold lg:text-3xl text-xl">Experience the beauty of</p>
                  <p className="font-semibold lg:text-3xl text-xl">the world with us.</p>
              </div>
              <button
                  className="text-white bg-primarycolor uppercase opacity-75 outline-none mt-4 py-3 px-4"
                  style={{ borderRadius: "1rem" }}
              >
                  Discover
              </button>
          </div>
      </div>
    </section>
  );
}
