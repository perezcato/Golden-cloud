import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {faStar as Star} from "@fortawesome/free-regular-svg-icons";
import bg from "../assets/images/bg4.jpg";


export default function Accomodation (){
    return (
        <section className="px-6 pt-5 pb-5 lg:px-24 lg:pt-20 lg:pb-10 z-0 ">
            <div className="packages-title text-left">
                <h2 className="font-extrabold uppercase text-xl lg:text-3xl">Our Recommended Hotels</h2>
            </div>
            <div className="lg:flex block lg:justify-between mt-6">
                <div
                    className="h-ch1 lg:h-ch z-0 w-full mb-6 lg:mb-0 lg:w-cw rounded-lg"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image bg-cover bg-center h-p6 lg:h-p5  rounded-lg relative"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                    </div>
                    <div className="content w-full pl-1 pr-6 text-left pt-4" style={{height: '20%'}}>
                        <p className="text-xs capitalize text-left">
                            Location of the hotel
                        </p>
                        <h2 className="text-xl font-extrabold mb-1">
                            Name of the hotel
                        </h2>
                        <p className="text-base capitalize text-left">
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={Star}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={Star}/>

                        </p>
                    </div>
                </div>
                <div
                    className="h-ch1 lg:h-ch z-0 w-full mb-6 lg:mb-0 lg:w-cw rounded-lg"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image bg-cover bg-center h-p6 lg:h-p5  rounded-lg relative"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                    </div>
                    <div className="content w-full pl-1 pr-6 text-left pt-4" style={{height: '20%'}}>
                        <p className="text-xs capitalize text-left">
                            Location of the hotel
                        </p>
                        <h2 className="text-xl font-extrabold mb-1">
                            Name of the hotel
                        </h2>
                        <p className="text-base capitalize text-left">
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={Star}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={Star}/>

                        </p>
                    </div>
                </div>
                <div
                    className="h-ch1 lg:h-ch z-0 w-full mb-6 lg:mb-0 lg:w-cw rounded-lg"
                    style={{
                        transition: "all 0.5s ease-in-out"
                    }}
                >
                    <div
                        className="place-image bg-cover bg-center h-p6 lg:h-p5  rounded-lg relative"
                        style={{ backgroundImage: `url(${bg})` }}
                    >
                    </div>
                    <div className="content w-full pl-1 pr-6 text-left pt-4" style={{height: '20%'}}>
                        <p className="text-xs capitalize text-left">
                            Location of the hotel
                        </p>
                        <h2 className="text-xl font-extrabold mb-1">
                            Name of the hotel
                        </h2>
                        <p className="text-base capitalize text-left">
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={faStar}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={Star}/>
                            <FontAwesomeIcon className="text-primarycolor" icon={Star}/>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};
