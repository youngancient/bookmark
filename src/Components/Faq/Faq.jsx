import "./style.css";
import { useEffect, useState } from "react";
import { ShortButton } from "../Button/Button";
import { FaqData } from "../../Utils/Data";


const Faq = () => {
  const [Faqs, setFaqs] = useState(FaqData);
  const [faqClicked, setClicked] = useState(false);
  const handleClick = (id) => {
    setClicked(!faqClicked);
    console.log(id);
  };
  return (
    <div className="faq-comp">
      {Faqs.map((faq) => (
        <div className="component" key={faq.id}>
          <div className="label" index={faq.id}>
            <h4 onClick={() => handleClick(faq.id)}>{faq.question}</h4>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                className={faqClicked ? `rotate` : ""}
                onClick={() => handleClick(faq.id)}
              >
                <path
                  fill="none"
                  stroke={faqClicked ? "hsl(0, 94%, 66%)" : "#5267DF"}
                  strokeWidth="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
          </div>
          <div className={faqClicked ? `` : 'content-cont'}>
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
