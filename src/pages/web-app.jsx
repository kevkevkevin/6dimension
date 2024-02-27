import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import WebApp from '../components/web-app';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Web & Mobile App Development"} />
            <WebApp />
        </Wrapper>
    );
};

export default index;