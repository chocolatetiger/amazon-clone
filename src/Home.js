import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        ></img>
        <div className="home__row">
          <Product
            id="1234567890"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="6786567890"
            title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater, Dough hook and whisk, 5 litre glass bowl"
            price={239}
            image="https://images-na.ssl-images-amazon.com/images/I/613IQeWeFBL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3487896283"
            title="Sony WH-1000XM4 Noise Cancelling Wireless Headphones - 30 hours battery life - Over Ear style - Optimised for Alexa and the Google Assistant - with built-in mic for phone calls - Black"
            price={339.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71A9daPY%2BDL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="7678865439"
            title="All-new Echo (4th generation) | With premium sound, smart home hub and Alexa | Charcoal"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71UGFF-EzFL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="6549728729"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={919.0}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="9876894325"
            title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440, 120Hz, Freesync, Gsync Compatible, HDMI, 2 x Displayport, USB, Dark Blue Grey"
            price={898.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
