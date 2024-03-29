import React from "react";

const ContactForm = () => {
  return (
    <>
      <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
        
        <input type="hidden" name="access_key" value="20aada27-6806-437e-acac-5b57f6abbe9a" />
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="text"
                type="text"
                placeholder="Service Type"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="text"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here"
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <div className="h-captcha" data-captcha="true"></div>
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
      
      <script src="https://web3forms.com/client/script.js" async defer></script>
    </>
  );
};

export default ContactForm;
