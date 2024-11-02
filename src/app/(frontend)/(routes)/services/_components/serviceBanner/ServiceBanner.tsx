import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/typography/typography';

type ServiceBannerProps = {
    serviceName: string;
    serviceDesc: string;
};

const ServiceBanner = ({ serviceName, serviceDesc }: ServiceBannerProps) => {
    return (
        <section
            className="py-36 relative"
            style={{
                backgroundImage: 'url(/services/manage_service-cover.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="container relative z-10 space-y-3">
                <SectionTitleBtn
                    className="bg-[#F5F5F5] text-[#5F6567] "
                    text="SOLUTIONS"
                />
                <Text text={serviceName} tag="h1" className="text-white" />
                <Text
                    text={serviceDesc}
                    className="text-white text-3xl lg:max-w-screen-sm leading-10"
                />
                <Button className="" variant="default">
                    Schedule a Free Consultation
                </Button>
            </div>
        </section>
    );
};
export default ServiceBanner;
