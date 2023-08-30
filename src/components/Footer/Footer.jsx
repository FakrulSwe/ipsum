import React from 'react';
import './Footer.css';
import logo2 from "../../images/Logo2.svg"

const Footer = () => {
    return (
        <div>
            <footer className="bg-secondary-subtle mt-5 rounded p-4">
            <div className="row row-cols-1 row-cols-md-4 mt-5">
                <div className="col">
                    <h3 className="pb-2">Products</h3>
                    <p>Features</p>
                    <p>Enterprice</p>
                    <p>Innovation</p>
                    <p>Offline</p>
                </div>
                <div className="col">
                    <h3 className="pb-2">Company</h3>
                    <p>About</p>
                    <p>Our Story</p>
                    <p>Careers</p>
                </div>
                <div className="col">
                    <h3 className="pb-2">Support</h3>
                    <p>Documentation</p>
                    <p>Community</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
                <div className="col">
                    <img className='pb-4' src={logo2} alt="" />
                    <p>Tristique senectus et netus et malesuada fames</p>
                    <p className='font'>©2023 Logoipsum by fakrul. All rights reserved</p>
                    <p className='font'>fakrul.swe@gmail.com</p>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;