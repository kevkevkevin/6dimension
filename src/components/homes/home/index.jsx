import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area"; 
import BlogArea from "./blog-area";
import BrandArea from '../../../common/brand-area';
import CtaArea from "./cta-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterTwo from "@/src/layout/footers/footer-2";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSlider />
        <AboutArea />
        <ServiceArea />
        <CtaArea />
        <FeatureArea />
        <BrandArea />
        <BlogArea />
        <FooterContact />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeOne;
