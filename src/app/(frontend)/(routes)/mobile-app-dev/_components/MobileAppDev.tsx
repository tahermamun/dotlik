import ContactUs from '@/components/shared/contactUs/ContactUs';
import Benefits from '../../services/_components/Benefits/Benefits';
import OurManageIT from '../../services/_components/OurManageIT/OurManageIT';
import CuttingEdge from '../../services/_components/cuttingEdge/CuttingEdge';
import ServiceBanner from '../../services/_components/serviceBanner/ServiceBanner';

const MobileAppDev = () => {
    return (
        <div>
            <ServiceBanner
                serviceName="Mobile App Development"
                serviceDesc="Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?"
            />
            <Benefits
                serviceName="Mobile App Development"
                serviceDesc="Our Mobile Development services create innovative mobile applications that engage your customers and enhance your business operations. We deliver user-friendly, feature-rich apps for both iOS and Android platforms, customized to your specific requirements."
                sideBarImg="/services/mobile-dev-benefit.jpg"
            />
            <OurManageIT
                img="/services/mobile-dev-manage.jpg"
                title=" Mobile App Development"
                Desc="Our Mobile Development services create innovative mobile applications that engage your customers and enhance your business operations. We deliver user-friendly, feature-rich apps for both iOS and Android platforms, customized to your specific requirements."
            />
            <div className="container">
                <CuttingEdge />
                <ContactUs />
            </div>
        </div>
    );
};
export default MobileAppDev;
