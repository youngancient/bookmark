import "./style.css";
import { LoginButton } from "../Button/Button";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = ({ isClicked, setClick }) => {
  return (
    <header>
      <div className="header">
        <div className="hero-logo">
          <img
            src="/assets/logo-bookmark.svg"
            alt="bookmark logo"
            className=""
          />
        </div>
        <div className="desktop-nav desktop">
          <div className="desktop-links">
            <a href="#feature" className="" style={{ marginLeft: "0px" }}>
              FEATURES
            </a>
            <a href="#" className="">
              PRICING
            </a>
            <a href="#contact" className="">
              CONTACT
            </a>
            <a href="#" className="">
              <LoginButton name="LOGIN" />
            </a>
          </div>
        </div>
        <div className="mobile-nav mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            onClick={setClick}
          >
            <path
              fill="#242A45"
              fillRule="evenodd"
              d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
            />
          </svg>
        </div>
      </div>
      {isClicked ? (
        <MobileMenu  setClick={setClick} />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
