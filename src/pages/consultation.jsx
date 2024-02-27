import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Consultation from '../components/consultation';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Consultation & Strategy"} />
            <Consultation />
        </Wrapper>
    );
};

export default index;