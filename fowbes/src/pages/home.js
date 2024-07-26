import React from "react";
//how to center text on page using css
import "./scroll.css";

const Home = () => {
    return (
    <div className=" main__container"> 
      <img className="logo" src="/images/Fowbes2.png" alt=""/>
      <div className="button">
        <a href="./pages/about"><button>About</button></a>
        <a href="./pages/roadmap"><button>Roadmap</button></a>
        <a href="./pages/buyfowbes"><button>Buy $FOWBES</button></a>
      </div>
      <section className="enable-animation">
        <div className="marquee">
          <ul className="marquee__content">
            <div className=" marquee__item">
              <img src="/images/pepe_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/boden_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/powsche_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/wif_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/ponke_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/duck_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/slerf_mag_cover.png" alt="" />
            </div>
          </ul>

          <ul aria-hidden="true" className="marquee__content">
          <div className=" marquee__item">
              <img src="/images/pepe_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/boden_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/powsche_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/wif_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/ponke_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/duck_mag_cover.png" alt="" />
            </div>
            <div className=" marquee__item">
              <img src="/images/slerf_mag_cover.png" alt="" />
            </div>
          </ul>
        </div>
      </section>
    </div>
    );

};

export default Home;