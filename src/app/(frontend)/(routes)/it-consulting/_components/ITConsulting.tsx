import ContactUs from '@/components/shared/contactUs/ContactUs';
import Benefits from '../../services/_components/Benefits/Benefits';
import OurManageIT from '../../services/_components/OurManageIT/OurManageIT';
import CuttingEdge from '../../services/_components/cuttingEdge/CuttingEdge';
import ServiceBanner from '../../services/_components/serviceBanner/ServiceBanner';

const ITConsulting = () => {
    return (
        <div>
            <ServiceBanner
                serviceName="IT Consulting & Advisory"
                serviceDesc="Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?"
            />
            <div>
                <Benefits
                    serviceName="IT Consulting"
                    serviceDesc="Are you busy putting out IT fires instead of focusing on your core business? If your technology is draining resources rather than optimizing them, Netsurit can get you back on track. A professionally managed services provider can give you the decisive edge to:"
                    sideBarImg="/services/it-consulting-sidebar-image.jpg"
                />
                <OurManageIT
                    title="IT Consulting"
                    Desc="Our IT Consulting & Advisory services provide expert guidance to help you navigate the complexities of the technological landscape. We help you design strategies that align with your business goals, ensuring you stay ahead in a competitive market."
                    img="/services/our_manage_it_consulting.jpg"
                />
                <div className="container">
                    <CuttingEdge />
                    <ContactUs />
                </div>
            </div>
        </div>
    );
};
export default ITConsulting;
