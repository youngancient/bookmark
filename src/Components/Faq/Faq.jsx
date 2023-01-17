import "./style.css";
import { useEffect, useState } from "react";
import { ShortButton } from "../Button/Button";

const Faqs = [
  {
    id: 0,
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 1,
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet..",
  },
  {
    id: 2,
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 3,
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Faq = () => {
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
