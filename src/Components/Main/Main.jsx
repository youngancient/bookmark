import "./style.css";
import { MediumButton, LiteButton } from "../Button/Button";
import { useState, useEffect } from "react";
import Feature from "../Features/Feature";
import Add from "../Add/Add";
import Faq from "../Faq/Faq";

const features = [
  {
    id: 1,
    imgSrc: "/assets/tab1.svg",
    alt: "tab one",
    head: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: 2,
    imgSrc: "/assets/tab2.svg",
    alt: "tab two",
    head: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    imgSrc: "/assets/tab3.svg",
    alt: "tab three",
    head: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];
const downloads = [
  {
    id: 1,
    imgSrc: "/assets/logo-chrome.svg",
    alt: "chrome",
    head: "Add to Chrome",
    text: "Minimum version 62",
  },
  {
    id: 2,
    imgSrc: "/assets/logo-firefox.svg",
    alt: "firefox",
    head: "Add to Firefox",
    text: "Minimum version 55",
  },
  {
    id: 3,
    imgSrc: "/assets/logo-opera.svg",
    alt: "opera",
    head: "Add to Opera",
    text: "Minimum version 46",
  },
];

let feature = {};
const Main = () => {
  const [switchNo, setSwitch] = useState(0);
  const [feature, setFeature] = useState({});
  useEffect(() => {
    setFeature(features[switchNo]);
  }, [switchNo]);
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
          <h2>Features</h2>
          <p className="fp">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className="switch">
            <div className="tab1" style={{ marginLeft: "0px" }}>
              <button className="" onClick={() => setSwitch(0)}>
                Simple Bookmarking
              </button>
            </div>
            <div className="tab2">
              <button onClick={() => setSwitch(1)}>Speedy Searching</button>
            </div>
            <div className="tab3">
              <button onClick={() => setSwitch(2)}>Easy Sharing</button>
            </div>
          </div>
          <div className="switch-comp">
            <div className="comps">
              <Feature
                key={feature.id}
                imgSrc={feature.imgSrc}
                alt={feature.alt}
                head={feature.head}
                text={feature.text}
              />
            </div>
          </div>
        </div>
        <div className="downloads">
          <h2>Download the extension</h2>
          <p className="fp">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className="download">
            <div className="add-comp">
              {downloads.map((download) => (
                <Add
                  key={download.id}
                  alt={download.id}
                  imgSrc={download.imgSrc}
                  head={download.head}
                  text={download.text}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <p className="fp">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          <Faq />
        </div>
      </div>
    </main>
  );
};

export default Main;
