import React from "react";
import bg from "../assets/images/webapp.jpg";

export default function Banner() {
  return (
    <section
        id="our-banner"
      className=" bg-center text-center md:text-left lg:text-left bg-cover "
      style={{ backgroundImage: `url(${bg})`, height: "100vh", boxSizing: 'border-box', minHeight: '701px' }}
    >
      <div className="w-full h-full lg:px-12 xl:px-16 pt-40 px-6 bg-dark lg:bg-transparent">
      <div className="mt-5 leading-none">
        <h3 className="uppercase text-4xl lg:text-5xl font-bold">
          <span className="text-primarycolor">Golden</span>cloud
        </h3>
        <p className="uppercase lg:ml-48 ml-32 pl-12 lg:pl-2 lg:text-lg text-sm lg:text-black text-white">travel and tour</p>
      </div>
      <div className="leading-tight mt-3 lg:text-black text-white">
        <p className="font-semibold lg:text-3xl text-xl">Experience the beauty of</p>
        <p className="font-semibold lg:text-3xl text-xl">the world with us.</p>
      </div>
      <div className=" mt-3">
        <p className="text-primarycolor lg:text-xl text-base">We make awesome tours easy</p>
        <p className="text-primarycolor lg:text-xl text-base">and affordable</p>
      </div>

      <button
        className="text-white bg-primarycolor uppercase opacity-75 outline-none mt-20 py-3 px-4"
        style={{ borderRadius: "1rem" }}
      >
        Discover
      </button>
      </div>
    </section>
  );
}
