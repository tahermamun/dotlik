import React from 'react';
import FaqComponents from './_components/FaqComponents';
import faqs from './_components/faqs.json';

const Page = () => {
    return (
        <div>
            <FaqComponents faqs={faqs} />
        </div>
    );
};

export default Page;
