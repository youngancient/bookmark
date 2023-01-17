import './style.css';


const Footer = () => {
    return ( 
        <footer>
            <div className="footer">
                <div className="footer-img">
                    <img src="/assets/white-logo-bookmark.svg" alt="footer logo mage" className="" />
                </div>
                <div className="footer-links">
                    <div className="f-alinks">
                        <a href="" className="" style={{marginLeft: '0px', marginTop: '0px'}}>FEATURES</a>
                        <a href="" className="">PRICING</a>
                        <a href="" className="">CONTACT</a>
                    </div>
                    <div className="f-social-links">
                        <a href="#" className="" style={{marginLeft: '0px'}}>
                        <i className="fa-brands fa-square-facebook"></i>
                        </a>
                        <a href="#" className="">
                        <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;