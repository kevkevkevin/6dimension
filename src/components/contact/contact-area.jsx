import ContactForm from '@/src/forms/contact-form'; 
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tp-contact-wrapper">
                                <div className="tp-contact-title-wrapper">
                                <h3 className="tp-contact-title">Contact <span className="title-color">With us</span></h3> 
                                <p>We are always here to assist you with any questions or concerns you may have. Whether you need help navigating our services or simply want to provide feedback, reaching out to us is easy.</p>
                                </div>
                                <div className="tp-contact-content">
                                <div className="tp-contact-content-mail d-flex align-items-center">
                                    <div className="tp-contact-content-mail-icon">
                                        <span> 
                                            <EmailIconOne /> 
                                        </span>
                                    </div>
                                    <h3 className="tp-contact-item-title"><a href="mailto:info@6dimensions.sa">info@6dimensions.sa</a></h3>
                                </div>
                                <div className="tp-contact-content-phone d-flex align-items-center">
                                    <div className="tp-contact-content-phone-icon">
                                        <span>
                                            <PhoneIcon /> 
                                        </span>
                                    </div>
                                    <h3 className="tp-contact-item-title">
                                        <a href="tel:+966920002393">+966 920 002 393</a>
                                    </h3>
                                </div>
                                <div className="tp-contact-location-wrapper d-flex">
                                    <div className="tp-contact-location">
                                        <h3 className="tp-contact-location-title">
                                            Office Location
                                            <i className="fa-regular fa-arrow-down"></i>
                                        </h3>
                                        <p>Mohamad Malibrai 2916, Jeddah 23421, Saudi Arabia</p>
                                    </div>
                                    <div className="tp-contact-location">
                                        <h3 className="tp-contact-location-title">
                                            Office Location {" "}
                                        <i className="fa-regular fa-arrow-down"></i></h3>
                                        <p>Mohamad Malibrai 2916, Jeddah 23421, Saudi Arabia</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-contact-form">
                                <h3 className="tp-contact-form-title">Contact Us</h3>
                                <p>Your email address will not be published. Required fields <br  /> are marked *</p>
                                <ContactForm /> 
                                <p className="ajax-response"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;