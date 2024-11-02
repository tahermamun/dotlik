import Image from 'next/image';
import { Separator } from '../separator';
import Link from 'next/link';

interface DisplayHowWeDoType {
    img: string;
    title: string;
    description: string;
}

const DisplayHowWeDo = ({ title, description, img }: DisplayHowWeDoType) => {
    return (
        <>
            <div className="bg-white shadow rounded hover:shadow-lg hover:transition duration-300 flex flex-col justify-between h-full">
                <div className="p-5 space-y-3 flex-grow">
                    <Image
                        src={img}
                        alt="how_we_do_card_image"
                        width={60}
                        height={60}
                    />
                    <h1 className="text-xl font-semibold hover:text-pacific-500 hover:transition duration-300 ">
                        {title}
                    </h1>
                    <p className="text-sm text-[#00000099]">{description}</p>
                </div>
                <Separator />
                <div className="pl-6 py-3">
                    <Link
                        href="/services"
                        target="_"
                        className="text-pacific-500 border-b-2 border-[#DEE0FF] text-xs font-medium cursor-pointer"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default DisplayHowWeDo;
