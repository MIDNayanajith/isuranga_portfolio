import "./home.css";

import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import profile1 from "../../assets/profile1.png";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <Data />

          <div className="box">
            <div className="home__img">
              <img src={profile1} alt="profile" />
            </div>
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
