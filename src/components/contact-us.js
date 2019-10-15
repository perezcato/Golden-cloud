import React from "react";

export default function ContactUs() {
  return (
    <section className="w-full px-6 lg:px-24 pt-5 lg:pt-20 lg:pb-16 " style={{boxSizing: 'border-box'}}>
      <div className="text-left">
        <h2 className="font-extrabold uppercase text-xl lg:text-3xl">Contact Us</h2>
        <h3 className="font-light text-sm lg:text-base">Talk to us we are available</h3>
      </div>
      <div className="lg:flex block" style={{boxSizing: 'border-box'}}>
        <div className="lg:mt-10 mt-5 lg:flex-1">
          <div className="">
            <p className="text-primarycolor font-bold font-sm lg:text-lg">Call us on</p>
            <h2 className="text-lg lg:text-2xl font-semibold">+(233) 23 456 7890</h2>
          </div>
          <div className="mt-4 lg:mt-8">
            <p className="text-primarycolor font-bold font-sm lg:text-lg">Email us on</p>
            <h2 className="text-lg lg:text-2xl font-semibold">info@goldencloud.com</h2>
          </div>
          <div className="mt-4 lg:mt-8">
            <p className="text-primarycolor font-bold font-lg">Visit us at</p>
            <h2 className="text-lg lg:text-2xl font-semibold">
              The location of the place
            </h2>
          </div>
        </div>
        <div className="form flex-1 lg:mt-0 mt-10">
          <div className="form-field">
            <label htmlFor="name" className="font-sm lg:text-lg">Your Name (required)</label>
            <input
              id="name"
              className="bg-white outline-none focus:outline-none focus:shadow-outline
                border border-primarycolor rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
          <div className="form-field mt-8">
            <label htmlFor="email" className="font-sm lg:text-lg">Your Email (required)</label>
            <input
              id="email"
              className="bg-white outline-none focus:outline-none focus:shadow-outline
                border border-primarycolor rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal"
              type="email"
              placeholder="janedoe@gmail.com"
            />
          </div>
          <div className="form-field mt-10">
            <label htmlFor="subject" className="font-sm lg:text-lg">Subject</label>
            <input
              id="subject"
              className="bg-white outline-none focus:outline-none focus:shadow-outline
                border border-primarycolor rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal"
              type="text"
              placeholder="Help"
            />
          </div>
          <div className="form-field mt-10">
            <label htmlFor="subject" className="font-sm lg:text-lg">Message</label>
            <textarea
              rows="4"
              className="bg-white outline-none border border-primarycolor
               rounded-lg py-2 px-4 block w-2/3 appearance-none leading-normal"
            >
            </textarea>
          </div>
        </div>
      </div>
    </section>
  );
}
