import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks from '@/src/common/social-links';

import  footer_shape_1 from "@assets/img/footer/shape-1.png";
import  footer_logo from "@assets/img/logo/footer-logo.png";


const footer_two_content = {
    bg_img: "/assets/img/footer/footer-2-bg.png",
    footer_widget: [
        "Low-current Solution",
        "Web & Mobile App Development",
        "E-Commerce Solutions",
        "Tailored IT Solutions",
        "Consultation & Strategy",
    ],
    google_map: "https://www.google.com/maps/place/Mansour+Holding+Group/@21.5487031,39.134019,19.79z/data=!4m9!1m2!2m1!1sgym+near+me+!3m5!1s0x15c3c5758ae231dd:0x7a1bb4851e31878b!8m2!3d21.5487071!4d39.1340835!16s%2Fg%2F11khjgtwbf?entry=ttu",
    about_us: <>At Dimensions Software Company, we understand that technology is constantly changing, and we strive to stay up-to-date with the latest trends and developments in the industry. </>,
    address: " 2916 Mohammad Mlibari Street Al khaladiyah Dist. Unit No: 6270",
    phone: "+966920002393",
    email: "info@6dimension.sa",
    footer_nav: [
        {title: "Home", link: "/"},
        {title: "Company", link: "/"},
        {title: "services", link: "/service"},
        {title: "Resources", link: "#"},
        {title: "Shop", link: "#"},
        {title: "contact", link: "/contact"},
    ],
    mobile: "+966 920 002 393",


}
const {bg_img, footer_widget, google_map, about_us, address, phone, email, footer_nav, mobile} = footer_two_content

const FooterTwo = () => {
    return (
        <>
            <footer className="tp-footer-2-area p-relative">
                <div className="tp-footer-overlay" style={{backgroundImage: `url(${bg_img})`}}>
                    <div className="tp-footer-2-shape">
                        <Image src={footer_shape_1} alt="theme-pure" />
                    </div>
                    <div className="container">
                    <div className="tp-footer-2-main-area">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-1">
                                <h3 className="tp-footer-widget-title">Newsletter</h3>
                                <div className="tp-footer-from">
                                <div className="tp-footer-text-email p-relative">
                                    <input type="text" placeholder="Enter Email Address" />
                                    <span>
                                        <EmailAeroplan /> 
                                    </span>
                                </div>
                                <div className="tp-footer-form-check">
                                <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    I agree to all your terms and policies
                                </label>
                                </div>
                                <div className="tp-footer-widget-social">
                                    <SocialLinks /> 
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-2">
                                <h3 className="tp-footer-widget-title">Services</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>{footer_widget.map((item, i) => <li key={i}><Link href="#">{item}</Link></li>)}</ul>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-3">
                                <h3 className="tp-footer-widget-title">About Us</h3>
                                <div className="tp-footer-widget-content">
                                <div className="tp-footer-info">
                                    <p>{about_us}</p>
                                    <div className="tp-footer-main-location">
                                        <Link target="_blank" href={google_map}>
                                            <i className="fa-sharp fa-light fa-location-dot"></i>{address}</Link>
                                    </div>
                                    <div className="tp-footer-main-mail">
                                        <Link href={`mailto:${email}`}><i className="fa-regular fa-phone"></i>{phone}</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="tp-footer-2-menu-area p-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-2">
                                <div className="tp-footer-2-logo">
                                    <Image src={footer_logo} alt="theme-pure" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-10">
                                <div className="tp-footer-2-menu">
                                    <ul>{footer_nav.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)}</ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="tp-footer-2-call d-flex justify-content-lg-end">
                                <div className="ddf">
                                    <p>Phone:</p>
                                    <span><Link href={`tel:${mobile}`}>{mobile}</Link></span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;