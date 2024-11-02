import DisplayServices from './DisplayServices';
import SectionTitleBtn from '../SectionTitleBtn';
import { Button } from '../button';

const Services = () => {
    const data = [
        {
            id: 1,
            img: '/Home/web.png',
            title: 'Web Development',
            description:
                'Build robust and scalable web applications tailored to your business needs with cutting-edge technology.',
        },
        {
            id: 2,
            img: '/Home/responsiev-web.png',
            title: 'Responsive & Mobile Development',
            description:
                'Ensure your web applications are optimized for all devices with responsive and mobile-friendly designs.',
        },
        {
            id: 3,
            img: '/Home/ui-ux.png',
            title: 'UI/UX',
            description:
                'Create user-centered designs that provide a seamless and engaging experience for your customers.',
        },
        {
            id: 4,
            img: '/Home/cms.svg',
            title: 'CMS Development',
            description:
                'Develop custom content management systems to streamline your content operations and improve workflow efficiency.',
        },
        {
            id: 5,
            img: '/Home/digital-merketing.png',
            title: 'Digital Marketing',
            description:
                'Boost your online presence and drive traffic with data-driven digital marketing strategies.',
        },
        {
            id: 6,
            img: '/Home/support.png',
            title: 'Web Maintenance & Support',
            description:
                'Keep your web applications running smoothly with ongoing maintenance and dedicated support.',
        },
    ];

    return (
        <div className="bg-[#a5dcff63]  p-6 max-md:px-0">
            <div className="container">
                {/* seciton title common btn */}
                <SectionTitleBtn
                    className="bg-[#F5F5F5] text-[#5F6567] "
                    text="how we do"
                />
                <h1 className="lg:text-5xl text-3xl font-bold mt-4">
                    Services
                </h1>
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 items-center my-10">
                    {data?.map((item) => (
                        <DisplayServices
                            key={item?.id}
                            img={item?.img}
                            description={item?.description}
                            title={item.title}
                        />
                    ))}
                </div>
                <div className="text-center hidden">
                    <Button variant="default">View All Solution</Button>
                </div>
            </div>
        </div>
    );
};
export default Services;
