import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import LowCurrent from '../components/low-current';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Low Current Solution"} />
            <LowCurrent />
        </Wrapper>
    );
};

export default index;