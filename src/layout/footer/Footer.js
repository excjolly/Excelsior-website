import React from "react";

const Footer = () => {
    return (
        <div className="footer__container">
            <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
            <div className="footer__options">
                <a
                    href="https://getexcelsior.com/terms-of-use"
                    target="_blank"
                    rel="noreferrer"
                >
                    Terms of use
                </a>

                <div className="footer-option-divider" />
                <a
                    href="https://getexcelsior.com/disclaimer"
                    target="_blank"
                    rel="noreferrer"
                >
                    Disclaimer
                </a>
                <div className="footer-option-divider" />
                <a
                    href="https://getexcelsior.com/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                >
                    Privacy Policy
                </a>
            </div>
        </div>
    );
};

export default Footer;
