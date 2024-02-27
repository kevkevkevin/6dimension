import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from  "@assets/img/services/consult/img-1.jpg";
import service_video_thumb from  "@assets/img/services/consult/img-2.jpg";
import RightSymbol from '@/src/svg/right-symbol';
import accordion from '@/src/data/accordion';

const service_details_content = {
    service_details_tab: [
        {id: 1, title: "Low Current Solutions", active: "", link: "../low-current"},
        {id: 2, title: "Web & Mobile Development", active: "", link: "../web-app"},
        {id: 3, title: "Tailored IT Solutions", active: "", link: "../it-solution"},
        {id: 4, title: "Ecommerce Solutions", active: "", link: "../ecommerce"},
        {id: 5, title: "Cloud Solutions & Migration", active: "", link: "../cloud-solution"},
        {id: 6, title: "Consultation & Strategy", active: "active", link: "../consultation"},
    ],
    title: <>Consultation & Strategy</>,
    description: <>Our commitment goes beyond code. We offer strategic consultation to align technology with your business objectives. 
    <br/><br/>
    From project ideation to implementation, our experts guide you through every step, ensuring that technology becomes a catalyst for your success.
    <br/><br/>
    Our team of dedicated professionals is here to support you in transforming your vision into reality. By understanding your unique business needs and goals, we can tailor our strategic consultation to provide you with the most effective solutions.
    </>,
    title_2: <>Why Marketing Important ?</>,
    description_2: <>Whether you are at the beginning stages of a project or seeking to enhance an existing system, our experts are equipped to offer comprehensive guidance and expertise. We believe that technology should not just be a tool, but a key driver of innovation and growth for your business.
    <br/><br/>
    Together, we can navigate the ever-evolving landscape of technology, leveraging its power to propel your business forward. Let us partner with you on this exciting journey towards achieving your business objectives and unlocking new opportunities for success.</>,
    feture_list: [
        <>Research beyond the business plan</>,
        <>Marketing options and rates</>,
        <>The ability to turnaround consulting</>,
    ],
    description_3: <>put service description here if you need more then just call it anytime mother fucker 🫰🏼🫰🏼</>,


}
const {service_details_tab, title, description, title_2, description_2, feture_list, description_3} = service_details_content

const ConsultationDetailsArea = () => {
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

export default ConsultationDetailsArea;