import "./style.css";
import { ShortButton } from "../Button/Button";


const Feature = ({imgSrc, alt, head, text}) => {
  return (
    <div className="comp">
      <div className="comp-img">
        <img src={imgSrc} alt={alt} className="" />
      </div>
      <div className="comp-text">
        <div className="innertxt">
            <h3 className="">{ head }</h3>
            <p className="">
            { text }
            </p>
            <div className="comp-btn ">
                <ShortButton name="More Info" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
