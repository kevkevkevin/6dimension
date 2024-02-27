import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import CloudSolution from '../components/cloud-solution';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Cloud Migration Solutions"} />
            <CloudSolution />
        </Wrapper>
    );
};

export default index;