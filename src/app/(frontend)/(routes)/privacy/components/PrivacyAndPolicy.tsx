import React from 'react';

import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';

const PrivacyPolicyPage = () => {
    return (
        <section className="my-10">
            <div className="text-center">
                <SectionTitleBtn
                    text="Privacy Policy"
                    className="text-[#000000] bg-[#f5f5f5]"
                />
                <Text
                    tag="h1"
                    text="Privacy Policy"
                    className="text-3xl lg:text-5xl mt-5 mb-3 font-extrabold"
                />
                <Text tag="heading" text="for Dotlick LLC" />
            </div>
            <div className="mt-10">
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="What information do we collect?"
                />
                <Text
                    tag="terms"
                    text="When you interact with us, we may collect your name, address, email address(es), telephone number(s), and, where appropriate, date of birth."
                />
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="How do we collect information?"
                />
                <Text
                    tag="terms"
                    text="We may collect information about you whenever you interact with us. For example, when you contact regarding our activities, register as a supporter, send or receive information or sign a petition, you specifically and knowingly provide us with your personal information. We may also receive information about you from third parties – but only if you have given them permission to share your information."
                />
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Confidentiality"
                />
                <Text
                    tag="terms"
                    text="We will not be responsible for the privacy of data collected by websites not owned or managed by Charity, including those linked through our website."
                />

                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Making a complaint"
                />

                <Text
                    tag="terms"
                    text="If you are not satisfied with the response, please contact us at konstruktion@email.com with the details explaining your concerns. We will review your complaint and investigate if the right procedures have been followed and respond back to you as appropriate. We aim to complete this investigation within 15 working days of receiving your complaint, however, in some cases it may take longer. If you are still unsatisfied with the response, you may contact us."
                />
            </div>
        </section>
    );
};

export default PrivacyPolicyPage;
