import ContactUs from '@/components/shared/contactUs/ContactUs';
import CuttingEdge from '../../services/_components/cuttingEdge/CuttingEdge';
import ServiceBanner from '../../services/_components/serviceBanner/ServiceBanner';
import Benefits from '../../services/_components/Benefits/Benefits';
import OurManageIT from '../../services/_components/OurManageIT/OurManageIT';

const WebDev = () => {
    return (
        <div>
            <ServiceBanner
                serviceName="Web Development"
                serviceDesc="Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?"
            />
            <Benefits
                serviceName="Web Development"
                serviceDesc="Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?"
                sideBarImg="/services/web-development.jpg"
            />
            <OurManageIT
                title="Web Development"
                Desc="Our Web Development services create robust, scalable, and high-performing websites tailored to your business needs. We ensure your online presence is visually appealing and optimized for user experience and conversion rates."
                img="/services/web-dev-manage.jpg"
            />
            <div className="container">
                <CuttingEdge />
                <ContactUs />
            </div>
        </div>
    );
};
export default WebDev;
