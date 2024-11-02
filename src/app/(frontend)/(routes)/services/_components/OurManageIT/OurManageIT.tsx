import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
type OurManageITProps = {
    title: string;
    Desc: string;
    img: string;
};
const OurManageIT = ({ title, Desc, img }: OurManageITProps) => {
    return (
        <section className="container">
            <div className=" my-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  items-center gap-x-10 w-full justify-center">
                <div className="lg:w-[650px]">
                    <Image
                        src={img}
                        alt="pexels-jopwell"
                        height={500}
                        width={500}
                        className="w-full lg:h-96 rounded"
                    />
                </div>
                <div className="lg:ml-24 space-y-4">
                    <Text
                        className="text-3xl font-semibold"
                        text={`Our ${title} services let you concentrate on what matters`}
                    />
                    <Text text={Desc} className="text-[15px] text-[#5F6567]" />
                </div>
            </div>
        </section>
    );
};
export default OurManageIT;
