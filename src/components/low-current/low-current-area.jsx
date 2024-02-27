import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/low-current/img-1.jpg";
import service_video_thumb from  "@assets/img/services/low-current/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
      {id: 1, title: "Low Current Solutions", active: "active", link: "../low-current"},
      {id: 2, title: "Web & Mobile Development", active: "", link: "../web-app"},
      {id: 3, title: "Tailored IT Solutions", active: "", link: "../it-solution"},
        {id: 4, title: "Ecommerce Solutions", active: "", link: "../ecommerce"},
        {id: 5, title: "Cloud Solutions & Migration", active: "", link: "../cloud-solution"},
        {id: 6, title: "Consultation & Strategy", active: "", link: "../consultation"},
    ],
    title: <>Low Current Solutions</>,
    description: <>Our team's proficiency in developing, executing, and managing low-current solutions for a smooth integration of advanced technologies like security systems, communication networks, and audio-visual systems.
   <br/><br/>
    Our approach to low-current solutions is based on a thorough understanding of the latest technologies and industry trends. We stay up-to-date with the latest developments in the field, and we leverage our knowledge to provide innovative solutions that meet the specific needs of each client.</>,
    title_2: <>Why Marketing Important ?</>,
    description_2: <>Navigate the intricacies of low-current systems with confidence. 
   <br/><br/>
    Our expertise in designing, implementing, and maintaining low-current solutions guarantees a seamless integration of technologies such as security systems, communication networks, and audio-visual systems.</>,
    feture_list: [
        <>Research beyond the business plan</>,
        <>Marketing options and rates</>,
        <>The ability to turnaround consulting</>,
    ],
    description_3: <>put service description here if you need more then just call it anytime mother fucker 🫰🏼🫰🏼</>,


}
const {service_details_tab, title, description, title_2, description_2, feture_list, description_3} = service_details_content

const LowCurrentArea = () => {
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
                                 <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2" 
                                        onClick={() => setIsVideoOpen(true)}  
                                        ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">
                                 {/* <h3 className="tp-service-details-title">{title_2}</h3> */}
                                 <p>{description_2}</p>
                              </div>
                           </div>
                        </div>

                        <div className="tp-service-details-faq faq-style-1">
                           <div className="tp-faq-tab-content tp-accordion">
                              <div className="accordion" id="general_accordion">
                                {accordion.map((item, i) => 
                                <div key={i} onClick={() => setIsActive(item.id)} className={`accordion-item ${isActive === item.id && "tp-faq-active"}`}>
                                    <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                    <button 
                                        className={`accordion-button ${item.collapsed}`} 
                                        type="button" 
                                        data-bs-toggle="collapse" 
                                        data-bs-target={`#collapse${item.accordion_id}`} 
                                        aria-expanded={item.aria_expanded}
                                        aria-controls={`collapse${item.accordion_id}`}>
                                        {item.question}
                                    </button>
                                    </h2>
                                    <div id={`collapse${item.accordion_id}`} 
                                        className={`accordion-collapse collapse ${item?.active && "show"}`} 
                                        aria-labelledby={`heading${item.accordion_id}`} 
                                        data-bs-parent="#general_accordion">
                                        <div className="accordion-body">
                                             <img src={item.image} alt="FAQ" style={accordionImg}/>
                                             <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div> 
                                )} 
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

export default LowCurrentArea;