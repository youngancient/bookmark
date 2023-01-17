import "./style.css";
import { MediumButton, LiteButton, LoginButton } from "../Button/Button";
import { useState, useEffect } from "react";
import Feature from "../Features/Feature";
import Add from "../Add/Add";
import Faq from "../Faq/Faq";
import { featuresData, downloadsData } from "../../Utils/Data";


const Main = () => {
  const [features, setFeatures] = useState(featuresData);
  const [downloads, setDownloads] = useState(downloadsData);
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
            <div className={`tab1 ${switchNo === 0 ? `active` : ''}`} style={{ marginLeft: "0px" }}>
              <button className={switchNo === 0 ? `activebtn` : ''} onClick={() => setSwitch(0)}>
                Simple Bookmarking
              </button>
            </div>
            <div className={`tab2 ${switchNo === 1 ? `active` : ''}`}>
              <button className={switchNo === 1 ? `activebtn` : ''} onClick={() => setSwitch(1)}>Speedy Searching</button>
            </div>
            <div className={`tab3 ${switchNo === 2 ? `active` : ''}`}>
              <button className={switchNo === 2 ? `activebtn` : ''} onClick={() => setSwitch(2)}>Easy Sharing</button>
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
        <div className="contact">
          <div className="contact-div">
            <h5>35,000+ already joined</h5>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form className="">
              <div className="form">
                <input
                  type="text"
                  name=""
                  placeholder="Enter your email address"
                  className=""
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FA5959" />
                    <g fill="#FFF" transform="translate(9 5)">
                      <rect width="2" height="7" rx="1" />
                      <rect width="2" height="2" y="8" rx="1" />
                    </g>
                  </g>
                </svg>
                <div className="error mobile">
                <p className="">Whoops make sure it's an email</p>
              </div>
                <div className="form-btn">
                  <LoginButton name="Contact Us" />
                </div>
              </div>
              <div className="error desktop">
                <p className="">Whoops make sure it's an email</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
