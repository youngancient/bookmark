import "./style.css";
import { useEffect, useState } from "react";
import { ShortButton } from "../Button/Button";
import { FaqData } from "../../Utils/Data";


const Faq = () => {
  const [Faqs, setFaqs] = useState(FaqData);

  // on click
  const handleClick = (index) => {
    // map through the list of faqs and update the state on the faq clicked and return it
    setFaqs(Faqs.map((faq,i) =>{
      if( i === index){
        faq.open = !faq.open;
      }else{
        faq.open = false;
      }
      return faq;
    }))
  };
  return (
    <div className="faq-comp">
      {Faqs.map((faq) => (
        <div className="component" key={faq.id} >
          <div className="label" onClick={() => handleClick(faq.id)}>
            <h4>{faq.question}</h4>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className={faq.open ? `rotate` : ""}
              >
                <path
                  fill="none"
                  stroke={faq.open ? "hsl(0, 94%, 66%)" : "#5267DF"}
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
          </div>
          <div className={faq.open ? `ans` : 'content-cont'}>
            <div className="content">{faq.answer}</div>
          </div>
        </div>
      ))}
      <div className="info-btn">
        <ShortButton name="More info" />
      </div>
    </div>
  );
};

export default Faq;
