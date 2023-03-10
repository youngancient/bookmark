import "./style.css";
import { motion } from "framer-motion";

const heroVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 1,
    },
  },
  exit :{
    opacity: 0,
    transition: {
      duration: 1.2,
    },
  }
};
const slideVariants = {
  up: {
    y: "-100vh",
  },
  down: {
    y: "100vh",
  },
  final: {
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  exitUp: {
    y: "-100vh",
    transition: {
      duration: 1,
    },
  },
  exitDown: {
    y: "100vh",
    transition: {
      duration: 1,
    },
  },
};

const MobileMenu = ({ setClick }) => {
  return (
    <motion.div
      className="popup mobile"
      variants={heroVariants}
      initial="initial"
      animate="final"
      exit= "exit"
    >
      <motion.div
        className="slidein"
        variants={slideVariants}
        initial="up"
        animate="final"
        exit="exitUp"
      >
        <div className="top">
          <img
            src="/assets/white-logo-bookmark.svg"
            alt="bookmark logo"
            className=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            onClick={setClick}
          >
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
            />
          </svg>
        </div>
        <div className="mobile-links">
          <div className="a">
            <a href="#feature" className="" onClick={setClick}>
              FEATURES
            </a>
          </div>
          <div className="a">
            <a href="#" className="">
              PRICING
            </a>
          </div>
          <div className="a">
            <a href="#contact" className="" onClick={setClick}>
              CONTACT
            </a>
          </div>
          <div className="a btn">
            <a href="#" className="">
              <button>LOGIN</button>
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="mobile-socials"
        variants={slideVariants}
        initial="down"
        animate="final"
        exit="exitDown"
      >
        <a href="#" className="" style={{ marginLeft: "0px" }}>
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#" className="">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
