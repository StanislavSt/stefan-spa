import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { LazyLoadComponent } from 'react-lazy-load-image-component';

import "./App.css";
import miscibleVideo from "./video/miscible.mp4";
import miscible from "./images/miscibleBG.jpg";
import miscible1 from "./images/miscibledisplacement01.jpg";
import miscible2 from "./images/miscibledisplacement02.jpg";
import miscible3 from "./images/miscibledisplacement03.jpg";

import logoGradient from "./images/logo_magenta.png";

import heels1 from "./images/RR_Rombaut_Heels_1.jpg";
import heels2 from "./images/RR_Rombaut_Heels_3.jpg";
import heels3 from "./images/RR_Rombaut_Heels_4.jpg";

import luxus1 from "./images/luxus1.jpg";
import luxus2 from "./images/luxus2.jpg";
import luxus3 from "./images/luxus3.jpg";
import luxus4 from "./images/luxus4.jpg";
import luxus5 from "./images/luxus5.jpg";
import luxus6 from "./images/luxus6.jpg";

import rest from "./images/REST_cover.jpg";
import rest1 from "./images/REST1.jpg";
import rest2 from "./images/REST2.jpg";
import rest3 from "./images/REST3.jpg";
import rest4 from "./images/REST4.jpg";
import rest5 from "./images/REST5.jpg";
import rest6 from "./images/REST6.jpg";

import ambivalence from "./images/ambivalenceBG.jpg";
import ambivalence1 from "./images/ambivalence01.jpg";
import ambivalence2 from "./images/ambivalence02.jpg";
import ambivalence3 from "./images/ambivalence03.jpg";
import ambivalence4 from "./images/ambivalence04.jpg";
import ambivalence5 from "./images/ambivalence05.jpg";
import ambivalence6 from "./images/ambivalence06.jpg";


// import selective from "./video/selective.mp4";

import { Work } from "./components/Work";


// import ProductData from './components/ProductData'
// import { Product } from './components/Product'
import MyShop from './components/MyShop'

import { Helmet } from "react-helmet";

function App() {
  const [logoClass, setLogoClass] = useState('logo')
  const [shopClass, setShopClass] = useState('shop-hidden')
  const [contactClass, setContactClass] = useState('contact-hidden')

  const logoClick = () => {
    // setLogoClass('logo-left')
    if (contactClass === 'contact-form') {
      setContactClass('contact-hidden')
      setLogoClass('logo')
    }
    if (shopClass === 'shop-hidden')
      setShopClass('shop')
    else setShopClass('shop-hidden')
  }

  const reachClick = () => {
    setContactClass('contact-form')
    setLogoClass('logo-contact')
    setShopClass('shop-hidden')
  }
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"></script>
      </Helmet>
      <Router>

        <Switch>
          <Route path="/shop">
            <div>
              <MyShop />
            </div>
          </Route>
          <Route path="/contact">
            <div>
              this is the contact
            </div>
          </Route>
          <Route path="/">
            <div className="middle">
              {/* <LazyLoadComponent>
<Work
                video={selective}
                header="Selective Memory"
                content="Part of group show « Casting the Runes » curated by Arthur Poujois"
                location="2021 - London, United Kingdom"
              /> */}
              <LazyLoadComponent>
                <Work
                  images={[rest, rest1, rest2, rest3, rest4, rest5, rest6]}
                  header="Rest"
                  content="Print design and production development for Michele Rizzo
                  Sculptural and performative installation; in the pictures: resin, aluminium, brass, printed cotton.
                  Courtesy: the artist, Fondazione Sandretto Re Rebaudengo, Quandriennale d’Arte di Roma.
                  "
                  location="2020 - Rome, Italy"
                  credits="Photo credits: Cristian Cocurullo"
                />
              </LazyLoadComponent>

              <LazyLoadComponent>
                <Work
                  images={[luxus6, luxus1, luxus2, luxus3, luxus4, luxus5]}
                  header="Luxus für Alle "
                  content="Print design and development for Annemarie Šarić. MoMu Award winner"
                  location="2020 - Antwerp, Belgium"
                  credits="Photo credits: Lee Wei"

                />
              </LazyLoadComponent>

              <LazyLoadComponent>
                <Work
                  images={[heels1, heels2, heels3]}
                  header="DYSMORPHIA Heels"
                  content="Design development and production follow up for ROMBAUT"
                  location="2019 - Paris, France"
                />
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Work
                  images={[
                    ambivalence,
                    ambivalence1,
                    ambivalence2,
                    ambivalence3,
                    ambivalence4,
                    ambivalence5,
                    ambivalence6
                  ]}
                  header="Ambivalence"
                  content="Visuals on holographic display: Sam Rolfes"
                  location="2018 - Antwerp, Belgium"
                  credits="Photo credits: Zlatimir Arakliev (photoshoot pics),  Etienne Todoir - Catwalkpictures (show pics) "
                />
              </LazyLoadComponent>
              <LazyLoadComponent>
                <Work
                  images={[miscible, miscible1, miscible2, miscible3]}
                  video={miscibleVideo}
                  header="Miscible Displacement"
                  content="Bachelor collection"
                  location="2016 - Antwerp, Belgium"
                  credits="Photo credits: Kiko"
                />
              </LazyLoadComponent>
            </div>
            <div
              className={logoClass}
            >
              <img
                onClick={() => logoClick()}
                onMouseLeave={() => { }} className="logo-img" alt="logo" src={logoGradient}></img>
              <span className={shopClass} onClick={() => reachClick()}>
                REACH
              </span>
              <Link to="/shop" className={shopClass}>
                ACQUIRE
              </Link>
              <Link to="/contact" className={shopClass}>
                SNEAK
              </Link>
              <div className={contactClass}>
                <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                  <input type="text" name="name" />
                  <input type="email" name="email" />
                  <textarea name="message"></textarea>
                </form>

                <form name="contact" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <input className="input" placeholder="NAME:" type="text" />
                  <input className="input" placeholder="EMAIL:" type="email" />
                  <textarea className="textarea" placeholder="QUESTION:" />
                  <button className="submit" type="submit">SUBMIT</button>
                </form>
              </div>

            </div>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
