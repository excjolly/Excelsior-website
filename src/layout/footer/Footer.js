import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer__container">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
            <div className="footer__options">
                {/* <a
                    href="https://getexcelsior.com/terms-of-use"
                    target="_blank"
                    rel="noreferrer"
                > */}
                <Link to='/terms-of-use'> Terms of use</Link>
                   
                {/* </a> */}

                <div className="footer-option-divider" />
                {/* <a
                    href="https://getexcelsior.com/disclaimer"
                    target="_blank"
                    rel="noreferrer"
                > */}
                  <Link to='/disclaimer'>  Disclaimer</Link>
                   
                {/* </a> */}
                <div className="footer-option-divider" />
                {/* <a
                    href="https://getexcelsior.com/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                > */}
                 <Link to='/privacy-policy'> Privacy Policy</Link>
                    
                {/* </a> */}
            </div>
        </div>
    );
};

export default Footer;
