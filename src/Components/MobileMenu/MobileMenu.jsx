import "./style.css";

const MobileMenu = ({setClick}) => {
  return (
    <div className="popup bdr mobile">
      <div className="slidein">
        <div className="top">
          <img
            src="/assets/white-logo-bookmark.svg"
            alt="bookmark logo"
            className=""
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" onClick={setClick}>
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
            />
          </svg>
        </div>
        <div className="mobile-links">
            <div className="a">
            <a href="#" className="">
                FEATURES
            </a>
            </div>
            <div className="a">
            <a href="#" className="">
                PRICING
            </a>
            </div>
            <div className="a">
            <a href="#" className="">
                CONTACT
            </a>
            </div>
            <div className="a btn">
            <a href="#" className="">
                <button>LOGIN</button>
            </a>
            </div>
        </div>
      </div>
      <div className="mobile-socials">
        <a href="#" className="" style={{marginLeft: '0px'}}>
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="#" className="">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
