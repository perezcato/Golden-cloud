import React from 'react';

import mole from '../../assets/images/places/mole.jpg';
import kakum from '../../assets/images/places/kakum.jpg';
import capecoast from '../../assets/images/places/capecoast.JPG';
import accra from '../../assets/images/places/accra.jpg';



export default function Places() {
    return(
        <section id="our-places" className="px-6 pt-10 pb-5 lg:px-12 xl:px-16 lg:pt-20 lg:pb-5 z-0 ">
            <div className="packages-title text-left">
                <h2 className="font-extrabold uppercase text-lg lg:text-2xl">
                    Popular Places to Visit
                </h2>
                <h3 className="font-light text-sm lg:text-base">Top places</h3>
            </div>
            <div className="lg:flex md:flex-wrap lg:justify-between md:flex md:justify-between block mt-6">
                <div
                    className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
                        style={{ backgroundImage: `url(${accra})` }}
                    >
                        <div
                            className="w-full h-full rounded"
                            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                            <p
                                style={{ right: "0.5rem", top: "0.5rem" }}
                                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
                            >
                                9.2
                            </p>
                            <div className="absolute bottom-0 left-0 w-full px-4">
                                <h2 className="text-base lg:text-lg font-normal text-white">
                                    Accra
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
                        style={{ backgroundImage: `url(${capecoast})` }}
                    >
                        <div
                            className="w-full h-full rounded"
                            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                            <p
                                style={{ right: "0.5rem", top: "0.5rem" }}
                                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
                            >
                                9.2
                            </p>
                            <div className="absolute bottom-0 left-0 w-full px-4">
                                <h2 className="text-base lg:text-lg font-normal text-white">
                                    Cape Coast
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
                        style={{ backgroundImage: `url(${kakum})` }}
                    >
                        <div
                            className="w-full h-full rounded"
                            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                            <p
                                style={{ right: "0.5rem", top: "0.5rem" }}
                                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
                            >
                                9.2
                            </p>
                            <div className="absolute bottom-0 left-0 w-full px-4">
                                <h2 className="text-base lg:text-lg font-normal text-white">
                                    Kakum Nature Park
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="h-64 lg:h-64 md:h-64 z-0 w-full rounded relative mb-6 lg:mb-0 lg:w-p2-5 md:w-p4.5 shadow-xl"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image relative bg-cover bg-center rounded h-full lg:h-full relative"
                        style={{ backgroundImage: `url(${mole})` }}
                    >
                        <div
                            className="w-full h-full rounded"
                            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                        >
                            <p
                                style={{ right: "0.5rem", top: "0.5rem" }}
                                className="bg-primarycolor absolute
                    text-white h-8 w-8 text-xs justify-center flex items-center rounded"
                            >
                                9.2
                            </p>
                            <div className="absolute bottom-0 left-0 w-full px-4">
                                <h2 className="text-base lg:text-lg font-normal text-white">
                                    Mole National Park
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
