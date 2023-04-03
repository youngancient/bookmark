import "./style.css";
import { ShortButton } from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";

const featureVariants = {
  left: {
    x: "-10%",
    opacity: 0,
  },
  right: {
    x: "10%",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
  exit:{
    opacity: 0,
  },
};

const Feature = ({ imgSrc, alt, head, text }) => {
  return (
    <div className="comp">
      <motion.div
        className="comp-img"
        variants={featureVariants}
        initial="right"
        animate="final"
        exit= "exit"
      >
        <img src={imgSrc} alt={alt} className="" />
      </motion.div>
      <motion.div
        className="comp-text"
        variants={featureVariants}
        initial="left"
        animate="final"
        exit= "exit"
      >
        <div className="innertxt">
          <h3 className="">{head}</h3>
          <p className="">{text}</p>
          <div className="comp-btn ">
            <ShortButton name="More Info" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Feature;
