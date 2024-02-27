import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/it/hero.jpg";
import service_video_thumb from  "@assets/img/services/it/img-2.jpg";

const service_details_content = {
    service_details_tab: [
        {id: 1, title: "Low Current Solutions", active: "", link: "../low-current"},
        {id: 2, title: "Web & Mobile Development", active: "", link: "../web-app"},
        {id: 3, title: "Tailored IT Solutions", active: "active", link: "../it-solution"},
        {id: 4, title: "Ecommerce Solutions", active: "", link: "../ecommerce"},
        {id: 5, title: "Cloud Solutions & Migration", active: "", link: "../cloud-solution"},
        {id: 6, title: "Consultation & Strategy", active: "", link: "../consultation"},
    ],
    title: <>Tailored IT Solutions</>,
    description: <>Unleash the full potential of your business with our bespoke IT solutions. 
    <br/><br/>
    From streamlined infrastructure to robust IT Solutions measures, we tailor our services to your unique needs, empowering your organization to thrive in the digital landscape.
    <br/><br/>
    Transform your business into a tech-savvy powerhouse with our customized IT solutions. Our team is dedicated to optimizing your infrastructure and enhancing your cybersecurity to ensure your organization is well-equipped for success in today's digital world.
    </>,
    description_2: <>By understanding your specific requirements, we design and implement solutions that are perfectly tailored to your business, unlocking new possibilities and driving growth. With our support, you can confidently navigate the complexities of the digital landscape and position your organization for long-term prosperity. Let's embark on this journey together towards a brighter, more innovative future for your business.</>,
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
                           <div className="col-lg-12 col-md-6">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                                 {/* 
                                 VIDEO PLAY BUTTON OVERLAPPING IMAGE
                                 
                                 <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div> */}
                              </div>
                           </div>
                           <div className="col-lg-12 col-md-6">
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