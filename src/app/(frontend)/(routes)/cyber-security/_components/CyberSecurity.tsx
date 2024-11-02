import ContactUs from '@/components/shared/contactUs/ContactUs';
import Benefits from '../../services/_components/Benefits/Benefits';
import OurManageIT from '../../services/_components/OurManageIT/OurManageIT';
import CuttingEdge from '../../services/_components/cuttingEdge/CuttingEdge';
import ServiceBanner from '../../services/_components/serviceBanner/ServiceBanner';

const CyberSecurity = () => {
    return (
        <div>
            <ServiceBanner
                serviceName="Cyber Security"
                serviceDesc="Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?"
            />
            <Benefits
                serviceName="Cyber Security"
                serviceDesc="Our Cyber Security services protect your business from digital threats. We offer comprehensive security solutions, including risk assessment, threat detection, and incident response, to safeguard your data and maintain your business continuity."
                sideBarImg="/services/hack-benefit.jpg"
            />
            <OurManageIT
                img="/services/hack-manage.jpg"
                title="Cyber Security"
                Desc="Our Cyber Security services protect your business from digital threats. We offer comprehensive security solutions, including risk assessment, threat detection, and incident response, to safeguard your data and maintain your business continuity."
            />
            <div className="container">
                <CuttingEdge />
                <ContactUs />
            </div>
        </div>
    );
};
export default CyberSecurity;
