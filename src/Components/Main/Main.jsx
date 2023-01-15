import "./style.css";
import { MediumButton, LiteButton } from "../Button/Button";
import { useState } from "react";

const Main = () => {
  
  return (
    <main>
      <div className="main">
        <div className="hero">
          <div className="hero-img">
            <img
              src="/assets/illustration-hero.svg"
              alt="hero svg"
              className=""
            />
          </div>
          <div className="hero-text">
            <div className="text">
              <h1>A Simple Bookmark Manager</h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className="hero-btn">
                <div className="btn1">
                  <MediumButton name="Get it on Chrome" />
                </div>
                <div className="btn2">
                  <LiteButton name="Get it on Firefox" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features">
          <h1>Features</h1>
          <p className="fp">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className="switch">
            <div className="tab1" style={{marginLeft: '0px'}}>
              <button className="">Simple Bookmarking</button>
            </div>
            <div className="tab2">
              <button>Speedy Searching</button>
            </div>
            <div className="tab3">
              <button>Easy Sharing</button>
            </div>
          </div>
          <div className="switch-comp bdr">
            comps here
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
