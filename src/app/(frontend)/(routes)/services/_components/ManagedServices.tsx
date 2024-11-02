import ContactUs from '@/components/shared/contactUs/ContactUs';
import Benefits from './Benefits/Benefits';
import OurManageIT from './OurManageIT/OurManageIT';
import ServiceBanner from './serviceBanner/ServiceBanner';
import CuttingEdge from './cuttingEdge/CuttingEdge';

const ManagedServices = () => {
    return (
        <section className="mt-[54px]">
            {/* service banner section  */}
            <ServiceBanner
                serviceName="Managed Services"
                serviceDesc="When you can have a full team of IT specialists for a fraction of the cost, why hire an internal IT person?"
            />
            {/* benefits section for service */}
            <Benefits
                serviceName="Manage IT Service"
                serviceDesc="Are you spending more time fighting IT fires than attending to your main business? Netsurit can help you get back on track if your technology is using resources more efficiently than it is consuming them. A provider of professionally managed services can offer you the advantage to:"
                sideBarImg="/services/developer_verticle.webp"
            />
            {/* manageIt services */}
            <OurManageIT
                title="Manage IT"
                Desc="Are you spending more time fighting IT fires than attending to your main business? Netsurit can help you get back on track if your technology is using resources more efficiently than it is consuming them. A provider of professionally managed services can offer you the advantage to:"
                img="/services/service_01.jpg"
            />
            {/* cuttingEdge section  */}
            <div className="container">
                <CuttingEdge />
            </div>
            {/* contact us section  */}
            <div className="lg:container">
                <ContactUs />
            </div>
        </section>
    );
};
export default ManagedServices;
