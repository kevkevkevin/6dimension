import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import ItSolution from '../components/it-solution';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Tailored IT Solutions"} />
            <ItSolution />
        </Wrapper>
    );
};

export default index;