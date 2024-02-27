import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/cloud/img-1.jpg";
import service_video_thumb from  "@assets/img/services/cloud/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
        {id: 1, title: "Low Current Solutions", active: "", link: "../low-current"},
        {id: 2, title: "Web & Mobile Development", active: "", link: "../web-app"},
        {id: 3, title: "Tailored IT Solutions", active: "", link: "../it-solution"},
        {id: 4, title: "Ecommerce Solutions", active: "", link: "../ecommerce"},
        {id: 5, title: "Cloud Solutions & Migration", active: "active", link: "../cloud-solution"},
        {id: 6, title: "Consultation & Strategy", active: "", link: "../consultation"},
    ],
    title: <>Cloud Solution & Migration</>,
    description: <>Embrace the power of the cloud with our tailored solutions. 
   <br/><br/>
    Whether you're looking to migrate your existing infrastructure or optimize cloud services for efficiency, we ensure a seamless transition that unlocks the full potential of cloud computing.</>,
    title_2: <>Why Marketing Important ?</>,
    description_2: <>
    Experience the freedom and flexibility that cloud computing can offer with our comprehensive range of tailored solutions. From streamlining your operations to enhancing collaboration and scalability, our team is dedicated to delivering a seamless transition that maximizes the benefits of the cloud. Let us guide you towards a future where innovation and efficiency go hand in hand, empowering your business to thrive in the digital age.</>,
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
                           <div className="col-lg-12">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                              </div>
                           </div>
                           <div className="col-lg-12">
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