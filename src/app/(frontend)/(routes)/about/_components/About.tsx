// import ContactUs from '@/components/shared/contactUs/ContactUs';
import FoundationalPrinciples from './FoundationalPrinciples/FoundationalPrinciples';
import BetterTogether from './betterTogether/BetterTogether';
import OurStory from './ourStory/OurStory';
import OurValue from './ourValue/OurValue';
import TeamAbout from './teamAbout/TeamAbout';
// import BrandSlider from './brandSlider/BrandSlider';

const About = () => {
    return (
        <>
            <div className="my-24 container">
                <OurStory />
                <OurValue />
                <FoundationalPrinciples />
            </div>
            <TeamAbout />
            <div className="container">
                {/* <BrandSlider /> */}
                <BetterTogether />
            </div>

            {/* <div className="lg:container">
                <ContactUs />
            </div> */}
        </>
    );
};
export default About;
