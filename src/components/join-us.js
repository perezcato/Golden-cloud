import React from "react";
import adventure from "../assets/images/con.jpg";

export default function JoinUs() {
    return (
        <section
            id="about-us"
            className="px-6 h-ch2 relative bg-fixed bg-cover bg-center lg:h-ch2 md:h-ch2 pt-5 pb-5 lg:px-12 xl:px-16 lg:pt-20 lg:pb-10 z-0 "
            style={{ backgroundImage: `url(${adventure})`, minHeight: '490px' }}
        >
            <div className="flex justify-center items-center flex-wrap text-center text-white">
                <div className="w-full h-p7 ">
                    <div className="mt-6 text-xl font-semibold">SAY HELLO!</div>
                    <form className="w-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
                        <div className="flex items-center mb-4">
                            <input className="w-full h-10 p-2 border-b border-gray-900 bg-gray-900 text-white"
                                   type="text" placeholder="Fullname" />
                        </div>
                        <div className="flex items-center mb-4">
                            <input className="w-full h-10 p-2 border-b border-gray-900 bg-gray-900 text-white"
                                   type="text" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                                        <textarea
                                            className="w-full h-24 px-2 pt-2 border-b-2 border-gray-900 bg-gray-900 text-white"
                                            placeholder="Message">
                                        </textarea>
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                className="w-full py-2 px-4 rounded bg-primarycolor hover:bg-primarycolor text-white font-bold"
                                type="button">SEND
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
