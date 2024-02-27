import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea from '../homes/home/about-area-2';
import CounterArea from '../homes/home-2/counter-area';
import FeatureArea from '../homes/home/feature-area';
import VideoArea from '../../common/video-area';
import BrandArea from '@/src/common/brand-area';
import TeamArea from '@/src/common/team-area';
import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterTwo from '@/src/layout/footers/footer-2';

const About = () => {
    return (
        <>
          <HeaderOne />  
          <main>
            <Breadcrumb top_title="Our Company"  page_title="Our Company" />
            <AboutArea about={true} /> 
            <CounterArea about={true} />
            <FeatureArea about={true} />
            <BrandArea />
            <TeamArea />
            <VideoArea />
            <BlogArea />
            <FooterContact />
          </main>
          <FooterTwo />
        </>
    );
};

export default About;