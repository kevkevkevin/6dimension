import React, {useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import feature_img_1 from "@assets/img/feature/home-2/img-2.jpg";
import feature_img_2 from "@assets/img/feature/home-2/img-3.jpg";
import feature_img_3 from "@assets/img/feature/home-2/img-1.jpg";



  const feature_slide_data = [
    {
        id: 1, 
        img: feature_img_1,
        subtitle: "IT Solutions",
        title: "WAVA Tech",
        link: "https://www.wavatec.fr/en",
    },
    {
        id: 2, 
        img: feature_img_2,
        subtitle: "Business Solutions",
        title: "Xenia Mobi Solutions",
        link: "https://xeniamobi.com/",
    },
    {
        id: 3, 
        img: feature_img_3,
        subtitle: "ERP & CRM",
        title: "ODOO Platform",
        link: "https://www.odoo.com/",
    },
  ]

const FeatureArea = () => {

    const setting = {
        type   : 'loop',
        pagination: false,
        arrows: false,
        focus: 'center',
        perPage: 1,
        gap:'30px',
        padding: '25%',
        throttle: 300,
        breakpoints: {
            991: {
                padding: '15%'
            },
            765: {
                padding: '12%',
                gap:'25px',
            },
            575: {
                arrows: false,
                padding: '0%',
            },
          },
      }
   const splideRef = useRef(null); 


    return (
        <>
            <section className="tp-feature-area-2 pt-120">
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                        <div className="col-lg-12">
                            <div className="tp-category-title-wrapper text-center">
                                <span className="tp-section-title__pre">
                                partnered <span className="title-pre-color">IT Solutions</span>
                                <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">
                                    OUR <span className="title-color">PARTNERS</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Splide options={setting} ref={splideRef} 
                            className="tp-feature-active-2 pt-35 splide wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"> 
                                    {feature_slide_data.map((item, i)  =>
                                        <SplideSlide key={i}>
                                            <div className="tp-feature-thumb-2 w-img p-relative">
                                            <Link href={`${item.link}`}>
                                                <Image src={item.img} alt="theme-pure" />
                                            </Link>
                                            <div className="tp-feature-2-info d-flex align-items-center p-relative">
                                                <div className="tp-feature-2-title-wrapper">
                                                    <span className="tp-feature-2-title-sub">{item.subtitle}</span>
                                                    <h4 className="tp-feature-2-title">
                                                        <Link href={`${item.link}`}>{item.title}</Link>
                                                    </h4>
                                                </div>
                                                <div className="tp-feature-2-btn">
                                                    <Link href={`${item.link}`}>
                                                        <i className="fa-regular fa-arrow-up-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            </div>
                                        </SplideSlide>
                                    )} 
                            </Splide>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureArea;