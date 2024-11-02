import { Button } from '@/components/ui/button';
import Text from '@/components/ui/typography/typography';
import Link from 'next/link';

const TeamAbout = () => {
    return (
        <section className="lg:py-28 md:py-34 py-20 px-4 bg-gradient-to-r from-[#E0E1ED] to-[#BDCEE8]">
            <div className=" max-w-screen-md mx-auto text-center">
                <Text text="A team built on experience" tag="h1" />
                <Text
                    className="text-[#5F6567] my-6"
                    text="We’re continuing to build our team nationally, bringing together a vibrant team with best-in-class service and technical skills alike."
                    tag="paragraph"
                />
                <Link href="/team">
                    <Button variant="default">Meet Our Team</Button>
                </Link>
            </div>
        </section>
    );
};
export default TeamAbout;
