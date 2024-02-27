import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Ecommerce from '../components/ecommerce';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"E-commerce Solutions"} />
            <Ecommerce />
        </Wrapper>
    );
};

export default index;