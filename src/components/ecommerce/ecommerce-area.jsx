import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/ecommerce/hero.jpg";
import service_video_thumb from  "@assets/img/services/ecommerce/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
      {id: 1, title: "Low Current Solutions", active: "", link: "../low-current"},
      {id: 2, title: "Web & Mobile Development", active: "", link: "../web-app"},
      {id: 3, title: "Tailored IT Solutions", active: "", link: "../it-solution"},
        {id: 4, title: "Ecommerce Solutions", active: "active", link: "../ecommerce"},
        {id: 5, title: "Cloud Solutions & Migration", active: "", link: "../cloud-solution"},
        {id: 6, title: "Consultation & Strategy", active: "", link: "../consultation"},
    ],
    title: <>Ecommerce Solutions</>,
    description: <>Transform your online business with our comprehensive e-commerce solutions. 
    <br/><br/>
    From intuitive user interfaces to secure payment gateways, we create immersive online shopping experiences that drive customer engagement and boost your bottom line.
    <br/><br/>
    Our team of experts is dedicated to helping you elevate your online presence and maximize your potential in the digital marketplace. By combining cutting-edge technology with strategic design, we aim to provide you with a seamless and efficient e-commerce platform that not only meets but exceeds your expectations.
    <br/><br/>
    We understand the importance of user experience and strive to make every interaction on your website a delightful and convenient one for your customers. With our tailored e-commerce solutions, you can attract more visitors, convert them into loyal customers, and ultimately increase your revenue.
    </>,
    title_2: <>Why Marketing Important ?</>,
    description_2: <>
    Let us take your online business to new heights and embark on a journey of growth and success together. It's time to stand out in the competitive world of e-commerce and leave a lasting impression on your target audience. Get in touch with us today and let's turn your online business dreams into reality.</>,
    feture_list: [
        <>Research beyond the business plan</>,
        <>Marketing options and rates</>,
        <>The ability to turnaround consulting</>,
    ],
    description_3: <>put service description here if you need more then just call it anytime mother fucker 🫰🏼🫰🏼</>,


}
const {service_details_tab, title, description, title_2, description_2, feture_list, description_3} = service_details_content

const ItSolutionDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isActive, setIsActive] = useState(1)

  // Define inline styles as a JavaScript object
  const accordionImg = {
   width: '100%',
   marginBottom: '20px',
 };

    return (
        <>
            <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-widget-tab">
                              <ul>
                                   {service_details_tab.map((item, i)  => 
                                    <li key={i}>
                                        <Link className={item.active} href={`${item.link}`}>
                                        {item.title} <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </li>
                                    )}
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>

                        <div className="tp-header-btn d-none d-xl-block">
                           <button className='profile-btn'><a href="https://www.dropbox.com/scl/fi/u7s5lvvd6qlt07upcocvq/6-dimension-profile.pdf?rlkey=gmzmfqcb328jbnmflikziqcqc&dl=0" target='_blank'>COMPANY PROFILE</a></button>
                        </div> 
   

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                        </div>
                        <h3 className="tp-service-details-title">{title}</h3>
                        <p>{description}</p>
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">
                                 {/* <h3 className="tp-service-details-title">{title_2}</h3> */}
                                 <p>{description_2}</p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </section>

            {/* video modal start */}
            <VideoPopup 
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"cXVteLWfzQg"}
            />
            {/* video modal end */}
        </>
    );
};

export default ItSolutionDetailsArea;