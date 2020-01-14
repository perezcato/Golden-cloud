import React from "react";



import Info from "./components/info-bar/info";
import Header from "./components/header";
import Banner from "./components/banner";
import OurPackages from "./components/our-packages";
import Accomodation from "./components/accomdation";
import Places from './components/info-bar/places';
import Menu from './components/menu';
import Action from './components/action';
import JoinUs from './components/join-us';
import Footer from './components/footer';
import AboutUs from './components/aboutsUs';


function App() {
  return (
      <>
        <Menu/>
    <div
      className=" bg-white"
      style={{ fontFamily: "Montserrat, san-serif", boxSizing: 'border-box' }}
    >
      <div className="sticky w-full z-20 top-0">
        <Info />
        <Header />
      </div>
      <Banner />
      <OurPackages />
      <Accomodation />
      <Places/>
      <AboutUs/>
      <Action/>
      <JoinUs/>
      <Footer/>
    </div>
        </>
  );
}

export default App;
