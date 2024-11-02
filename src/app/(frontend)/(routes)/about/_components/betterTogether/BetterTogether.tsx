import { Button } from '@/components/ui/button';
import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import Link from 'next/link';

const BetterTogether = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 items-center my-24">
            <div className="text-center lg:text-left lg:space-y-5 md:space-y-3">
                <Text tag="h1" text="Better Together" />
                <Text
                    className="text-[#5F6567] text-md"
                    text="We understand that work is vital, but so is play! We value all of our connections and strive to engage in exciting ways that tackle crucial problems while also putting a smile on your face."
                />
                <Text
                    className="text-[#5F6567] text-md"
                    text="We love our job and love helping our clients. Life is just too short to not enjoy every minute!"
                />
                <Link href="/contact" className="mt-3 block">
                    <Button variant="default">Get in Touch</Button>
                </Link>
            </div>
            {/* right side image */}
            <div className="lg:col-span-2">
                <div className="lg:h-[450px]">
                    <Image
                        src="/about/about_04.jpg"
                        alt="better_together_image"
                        height={500}
                        width={500}
                        className=" w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};
export default BetterTogether;
