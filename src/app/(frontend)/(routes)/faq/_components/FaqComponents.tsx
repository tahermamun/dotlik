'use client';

import ContactUs from '@/components/shared/contactUs/ContactUs';
import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';
import FaqItem from './FaqItem';

interface Faq {
    question: string;
    point?: string[];
    answer: string | string[];
    id: number;
}

interface FaqComponentProps {
    faqs: Faq[];
}

const FaqComponents = ({ faqs }: FaqComponentProps) => {
    return (
        <section className="pt-20">
            <div className="container text-center sm:mb-10 mb-6">
                <SectionTitleBtn
                    text="FAQ"
                    className="text-[#000000] bg-[#f5f5f5]"
                />
                <Text
                    tag="h1"
                    text="Frequently asked questions"
                    className="text-3xl lg:text-6xl font-extrabold max-w-3xl m-auto sm:my-6 my-4"
                />
            </div>

            {/* Faq accordion start */}
            <ul className="container">
                {faqs.map((faq) => (
                    <FaqItem
                        key={faq?.id}
                        question={faq.question}
                        answer={faq.answer}
                        point={faq.point}
                    />
                ))}
            </ul>
            {/* Faq accordion end */}

            <div className="lg:container">
                <ContactUs />
            </div>
        </section>
    );
};

export default FaqComponents;
