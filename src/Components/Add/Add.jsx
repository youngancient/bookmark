import "./style.css";
import { LongButton } from "../Button/Button";
import { motion } from "framer-motion";

const browserVariants = {
  initial:{
    scale : 0.8,
  },
  final :{
    scale : 1,
    transition :{
      duration : 1.5,
    }
  }
}

const Add = ({alt, imgSrc, head, text}) => {
  return (
    <motion.div className="browser"
    variants={browserVariants}
    initial = "initial"
    whileInView= "final"
    viewport={{ once : true}}
    >
      <div className="in">
        <img src={imgSrc} alt={alt} className="" />
        <h3>{head}</h3>
        <p>{ text }</p>
      </div>
      <img src="/assets/bg-dots.svg" alt="dots" className="dots" />
      <div className="browser-btn">
        <LongButton />
      </div>
    </motion.div>
  );
};

export default Add;
