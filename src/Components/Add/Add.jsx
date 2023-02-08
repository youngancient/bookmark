import "./style.css";
import { LongButton } from "../Button/Button";
import { motion } from "framer-motion";


const Add = ({alt, imgSrc, head, text}) => {
  return (
    <div className="browser">
      <div className="in">
        <img src={imgSrc} alt={alt} className="" />
        <h3>{head}</h3>
        <p>{ text }</p>
      </div>
      <img src="/assets/bg-dots.svg" alt="dots" className="dots" />
      <div className="browser-btn">
        <LongButton />
      </div>
    </div>
  );
};

export default Add;
