import "./style.css";
import { MediumButton, LiteButton, LoginButton } from "../Button/Button";
import { useState, useEffect } from "react";
import Feature from "../Features/Feature";
import Add from "../Add/Add";
import Faq from "../Faq/Faq";
import { featuresData, downloadsData } from "../../Utils/Data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const heroVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      staggerChildren: 1,
    }
  }
}
const heroChildVariants = {
  left: {
    x: '-25%',
  },
  right: {
    x: '25%',
  },
  final: {
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 1,
    }
  },
  btnLeft: {
    x: '-100vw',
  },
  btnRight: {
    x: '100vw',
  },
  btnFinal : {
    x: 0,
    transition:{
      delay: 1,
      duration: 2,
    }
  },
  btnFinal2 : {
    x: 0,
    transition:{
      delay: 2,
      duration: 2,
      type : 'spring',
      stiffness : 300
    }
  }
}

const Main = () => {
  const [features, setFeatures] = useState(featuresData);
  const [downloads, setDownloads] = useState(downloadsData);
  const { ref: mainRef, inView: mainInView } = useInView();
  const [switchNo, setSwitch] = useState(0);
  const [feature, setFeature] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setFeature(features[switchNo]);
    }, 100);
  }, [switchNo]);

  // for the form
  const [email, setEmail] = useState("")
  const [errorMsg, setErrorMsg]= useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitting, setSubmit] = useState(false);

  const handleMail = (event) => {
    setEmail(event.target.value.trim());
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
      setErrorMsg(null);
      setIsValid(true);
    } else {
      setErrorMsg("Whoops! This Email Address");
      setIsValid(false);
    }
  };

  const handleSubmit = (event) => {
    if (!isValid) {
      event.preventDefault();
    } else {
      setTimeout(() => {
        setSubmit(true);
      }, 1000);
      // event.preventDefault();
    }
  };
  const [text] = useTypewriter({
    words: ["Manager", "Library"],
    loop: {},
  });

  return (
    <main>
      <div className="main" ref={mainRef}>
        <motion.div className="hero"
        variants={heroVariants}
        initial= 'initial'
        viewport={{ once: true }}
        animate = 'final'
        >
          <motion.div className="hero-img"
          variants={heroChildVariants}
          initial='left'

          whileInView='final'
          >
            <img
              src="/assets/illustration-hero.svg"
              alt="hero svg"
              className=""
            />
          </motion.div>
          <motion.div className="hero-text"
          variants={heroChildVariants}
          initial= 'right'
          viewport={{ once: true }}
          whileInView='final'
          >
            <div className="text">
              <h1>A Simple Bookmark
              <strong>
                  {text}
                  <Cursor cursorColor="hsl(0, 94%, 66%)" />
                </strong>
              </h1>
              <p>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </p>
              <div className="hero-btn">
                <motion.div className="btn1"
                variants={heroChildVariants}
                initial= 'btnLeft'
                animate = 'btnFinal'
                >
                  <MediumButton name="Get it on Chrome" />
                </motion.div>
                <motion.div className="btn2"
                variants={heroChildVariants}
                initial= 'btnRight'
                animate = 'btnFinal2'
                >
                  <LiteButton name="Get it on Firefox" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="features"
        id="feature"
        variants={heroVariants}
        initial= 'initial'
        animate = 'final'
        >
          <div className="in-features">
            <h2>Features</h2>
            <p className="fp">
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so you
              can access them on
              the go.
            </p>
          </div>
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
        </motion.div>
        <motion.div className="downloads"
        variants={heroVariants}
        initial= 'initial'
        animate = 'final'
        >
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
        </motion.div>
        <div className="faq">
          <h2>Frequently Asked Questions</h2>
          <p className="fp">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
          <Faq />
        </div>
        <div className="contact" id="contact">
          <div className="contact-div">
            <h5>35,000+ already joined</h5>
            <h2>Stay up-to-date with what we’re doing</h2>
            <form className="" onSubmit={handleSubmit}>
              <div className="form">
                <input
                  type="text"
                  name=""
                  placeholder="Enter your email address"
                  className={isValid ? 'red' : 'green'}
                  onChange={handleMail}
                  onKeyUp={handleMail}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className={errorMsg === "Whoops! This Email Address" ? `` : 'hid'}>
                  <g fill="none" fillRule="evenodd">
                    <circle cx="10" cy="10" r="10" fill="#FA5959" />
                    <g fill="#FFF" transform="translate(9 5)">
                      <rect width="2" height="7" rx="1" />
                      <rect width="2" height="2" y="8" rx="1" />
                    </g>
                  </g>
                </svg>
                <div className="error mobile">
                <p className="">{ errorMsg }</p>
              </div>
                <div className="form-btn">
                  <LoginButton name={isSubmitting ? 'Sending': 'Contact Us'} />
                </div>
              </div>
              <div className="error desktop">
                <p className="">{ errorMsg }</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
