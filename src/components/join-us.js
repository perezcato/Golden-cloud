import React from "react";
import adventure from "../assets/images/con.jpg";

export default function JoinUs() {
    return (
        <section
            id="about-us"
            className="px-6 h-ch2 relative bg-fixed bg-cover bg-center lg:h-ch2 md:h-ch2 pt-5 pb-5 lg:px-12 xl:px-16 lg:pt-20 lg:pb-10 z-0 "
            style={{ backgroundImage: `url(${adventure})` }}
        >
            <div className="flex justify-center items-center flex-wrap text-center text-white">


                <div className="w-full md:w-2/3 p-5 md:text-center text-center">
                    <div className="my-6 ml-3 text-xl font-semibold">ABOUT US</div>
                    <p className="p-3 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac
                        est massa. Donec eget elementum sapien, tincidunt tempor nunc. Cras sodales id ipsum at
                        convallis.</p>
                    <p className="p-3 text-white">Morbi tristique massa nec massa auctor, at scelerisque felis
                        consectetur. Morbi tempus et odio sit amet feugiat. Maecenas dignissim a turpis in molestie.
                        Fusce tincidunt vestibulum iaculis.</p>
                </div>

            </div>
        </section>
    );
}
