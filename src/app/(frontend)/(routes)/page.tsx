import Hero from '@/components/ui/hero/Hero';
// import Reviews from '@/components/ui/reviews/Reviews';
import ContactUs from '@/components/shared/contactUs/ContactUs';
import Industry from '@/components/ui/industry/Industry';
import WhatWeDo from '@/components/ui/whatWeDo/WhatWeDo';
// import BrandPartner from '@/components/ui/brandPartner/BrandPartner';
import WhatWeSlider from '@/components/shared/slider/what-we-slider';
import Features from '@/components/ui/features/features';
import Services from '@/components/ui/services/services';

const Page = () => {
    return (
        <>
            <div className="container">
                <Hero />
                {/* <Reviews /> */}
                <WhatWeDo text="Simplifying IT for a complex world." />
            </div>
            <div className="container">
                <Features />
            </div>
            <Services />
            <Industry />
            <WhatWeSlider />
            <div className="lg:container">
                <ContactUs />
            </div>
            {/* <BrandPartner /> */}
        </>
    );
};

export default Page;
