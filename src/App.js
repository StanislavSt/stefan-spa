import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import miscibleVideo from "./video/miscible.mp4";
import miscible from "./images/miscibleBG.jpg";
import logoGrey from "./images/logo_grey.png";
import logoGradient from "./images/logo_gradient1.png";

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

import selective from "./video/selective.mp4";

import { Work } from "./components/Work";

function App() {
  const [logo, setLogo] = useState(logoGradient);
  const [logoClass, setLogoClass] = useState('logo')
  const [shopClass, setShopClass] = useState('shop-hidden')

  const logoClick = () => {
    setLogoClass('logo-left')
    setShopClass('shop')
  }

  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/shop">
            <div>
              this is the shop
            </div>
          </Route>
          <Route path="/contact">
            <div>
              this is the contact
            </div>
          </Route>
          <Route path="/">
            <div className="middle">
              <Work
                video={selective}
                header="Selective Memory"
                content="Part of group show « Casting the Runes » curated by Arthur Poujois"
                location="2021 - London, United Kingdom"
              />
              <Work
                images={[rest, rest1, rest2, rest3, rest4, rest5, rest6]}
                header="Rest"
                content="Print design and production development for Michele Rizzo"
                location="2020 - Rome, Italy"
              />
              <Work
                images={[luxus6, luxus1, luxus2, luxus3, luxus4, luxus5]}
                header="Luxus für Alle "
                content="Print design and development for Annemarie Šarić"
                location="2020 - Antwerp, Belgium"
              />
              <Work
                images={[heels1, heels2, heels3]}
                header="DYSMORPHIA Heels"
                content="Design development and production follow up for ROMBAUT"
                location="2019 - Paris, France"
              />
              <Work
                img={miscible}
                header="Ambivalence"
                content="Visuals on holographic display: Sam Rolfes"
                location="2018 - Antwerp, Belgium"
              />
              <Work
                images={[
                  ambivalence,
                  ambivalence1,
                  ambivalence2,
                  ambivalence3,
                  ambivalence4,
                  ambivalence5,
                ]}
                header="Miscible Displacement"
                content="Bachelor collection"
                location="2016 - Antwerp, Belgium"
              />
              <video
                className="video"
                src={miscibleVideo}
                type="video/mp4"
                autoPlay
                loop
                muted
              />
            </div>
            <div
              className={logoClass}
              onClick={() => logoClick()}
            >
              <Link to="/shop" className={shopClass}>
                SHOP
              </Link>
              <Link to="/contact" className={shopClass}>
                CONTACT
              </Link>
              <img onMouseOver={() => setLogo(logoGrey)}
                onMouseLeave={() => setLogo(logoGradient)} className="logo-img" alt="logo" src={logo}></img>
            </div>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
