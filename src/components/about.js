import React from 'react';
import AboutSection from './aboutsUs';
import Action from './action';
import JoinUs from './join-us';
import bg from "../assets/images/webapp.jpg";

export default function About() {
    return (
        <div>
            <section
                id="our-banner"
                className="bg-center mb-0 text-center md:text-left lg:text-left bg-cover "
                style={{ backgroundImage: `url(${bg})`, height: "50vh", boxSizing: 'border-box', }}
            >
                <div className="w-full h-full lg:px-12 xl:px-16 pt-40 px-6 text-center bg-dark">
                    <div className="mt-5 leading-none">
                        <h3 className="uppercase text-white text-4xl lg:text-5xl font-bold">
                           About Us
                        </h3>
                    </div>
                </div>
            </section>
            <AboutSection />
            <Action/>
            <JoinUs/>
        </div>
    )
}
