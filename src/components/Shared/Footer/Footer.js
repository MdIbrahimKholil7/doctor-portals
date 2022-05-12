import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../img/images/footer.png'
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div
            style={{
                background: `url(${footerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <footer>
                <div className="footer p-10 place-content-between text-black">
                    <div className='text-[16px]'>
                        <span className="footer-title uppercase">Services</span>
                        <Link to='/' className="link link-hover">Emergency Checkup</Link>
                        <Link to='/' className="link link-hover">Monthly Checkup</Link>
                        <Link to='/' className="link link-hover">Weekly Checkup</Link>
                        <Link to='/' className="link link-hover">Daily Checkup</Link>
                    </div>
                    <div className='text-[16px]'>
                        <span className="footer-title uppercase">Oral Health</span>
                        <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                        <Link to='/' className="link link-hover">Cavity Filling</Link>
                        <Link to='/' className="link link-hover">Teath Whitening</Link>
                    </div>
                    <div className='text-[16px]'>
                        <span className="footer-title uppercase">Our Address</span>
                        <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>

                    </div>
                </div>
                <div className="footer footer-center p-4 text-base-content">
                    <p>Copyright © {year} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;