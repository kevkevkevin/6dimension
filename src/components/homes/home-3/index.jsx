import React from 'react';
import HeroArea from './hero-area';
import CounterArea from './counter-area';
import AboutArea from '../home/about-area-2';
import HeaderThree from '@/src/layout/headers/header-3';
import CategoryArea from '../home/category-area';
import ServiceArea from './service-area';
import CtaArea from '../home/cta-area';
import FeatureArea from './feature-area';
import TestimonialArea from '../../../common/testimonial-area';
import BrandArea from '../../../common/brand-area';
import TeamArea from '../../../common/team-area';
import BlogArea from '../../../common/blog-area';
import FooterContact from '../../../layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const HomeThree = () => {
    return (
        <>
            <HeaderThree />
            <main>
                <HeroArea />
                <CounterArea />
                <AboutArea />
                <CategoryArea />
                <ServiceArea />
                <CtaArea />
                <FeatureArea />
                <TestimonialArea />
                <BrandArea />
                <TeamArea />
                <BlogArea />
                <FooterContact />
            </main>
            <FooterThree />

        </>
    );
};

export default HomeThree;