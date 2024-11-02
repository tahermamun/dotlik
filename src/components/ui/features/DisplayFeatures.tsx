import Image from 'next/image';
import { ReactNode } from 'react';

interface DisplayFeaturesType {
    img?: string;
    title: string;
    description: string;
    icon?: ReactNode;
    className?: string;
    iconClass?: string;
}
const DisplayFeatures = ({
    img,
    icon,
    title,
    description,
    className,
    iconClass,
}: DisplayFeaturesType) => {
    return (
        <>
            <div className={`${className} ${icon ? 'space-y-4' : 'space-y-5'}`}>
                {img ? (
                    <Image
                        src={img}
                        alt="service_img_1"
                        width={60}
                        height={60}
                        className="h-[71px] w-[78px]"
                    />
                ) : (
                    <div
                        className={`inline-block  ${iconClass ? iconClass : 'text-7xl text-pacific-500'}`}
                    >
                        {icon}
                    </div>
                )}
                <h2 className={`${icon ? 'my-2' : ''} text-2xl font-medium`}>
                    {title}
                </h2>
                <p
                    className={` text-[15px] text-[#00000099] mb-3 ${icon ? 'mb-[2.3rem]  md:mb-2' : ''} `}
                >
                    {description}
                </p>
            </div>
        </>
    );
};
export default DisplayFeatures;
