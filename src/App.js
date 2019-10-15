import React from "react";

import Info from "./components/info-bar/info";
import Header from "./components/header";
import Banner from "./components/banner";
import OurPackages from "./components/our-packages";
import ContactUs from "./components/contact-us";
import Accomodation from "./components/accomdation";
import Places from './components/info-bar/places';
import Menu from './components/menu';


function App() {
  return (
      <>
        <Menu/>
    <div
      className=""
      style={{ fontFamily: "Montserrat, san-serif", boxSizing: 'border-box' }}
    >
      <div className="sticky z-20 top-0">
        <Info />
        <Header />
      </div>
      <Banner />
      <OurPackages />
      <Accomodation />
      <Places/>
      <ContactUs />
    </div>
        </>
  );
}

export default App;
