import Image from 'next/image';

interface DisplayIndustryProps {
    img: string;
    title: string;
}

const DisplayIndustry = ({ img, title }: DisplayIndustryProps) => {
    return (
        <div className="flex items-center bg-[#F5F5F5] rounded-full ">
            <Image
                src={img}
                alt={title}
                className="rounded-full object-cover"
                width={50}
                height={50}
                style={{ width: '50px', height: '50px' }}
            />
            <h2 className="text-sm font-bold px-4">{title}</h2>
        </div>
    );
};

export default DisplayIndustry;
