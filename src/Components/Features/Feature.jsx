import "./style.css";
import { ShortButton } from "../Button/Button";
import { motion, AnimatePresence } from "framer-motion";


const featureVariants = {
  left: {
    x: '-10%',
    opacity: 0,
  },
  right: {
    x: '10%',
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 1,
    }
  }
}

const Feature = ({imgSrc, alt, head, text}) => {
  return (
    <div className="comp">
        <motion.div className="comp-img"
        variants={featureVariants}
        initial= 'right'
        animate = 'final'
        >
          <img src={imgSrc} alt={alt} className="" />
        </motion.div>
      <motion.div className="comp-text"
      variants={featureVariants}
      initial= 'left'
      animate = 'final'
      >
        <div className="innertxt">
            <h3 className="">{ head }</h3>
            <p className="">
            { text }
            </p>
            <div className="comp-btn ">
                <ShortButton name="More Info" />
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Feature;
