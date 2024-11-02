import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../button';
import { Separator } from '../separator';
import Text from '../typography/typography';

const Hero = () => {
    return (
        <section className=" mt-[5rem]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0 mb-10 relative max-md:pt-[50px] pt-[100px] z-10">
                {/* hero content start here */}
                <div className="space-y-5">
                    <Text
                        text="Creating the future of it with amazing experiences"
                        tag="h1"
                        className="xl:text-[63px]"
                    />
                    <p>
                        Dotlik IT crafts fast, intuitive websites and mobile
                        apps that boost your workflow. We deliver top-tier
                        development and design solutions, ensuring your business
                        thrives in the digital world.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button className="" variant="default">
                            Schedule a Free Consultation
                        </Button>
                        <Button
                            variant="secondary"
                            className="--tw-space-x-reverse: 0"
                        >
                            Services
                        </Button>
                    </div>
                </div>
                {/* hero content end here */}

                <div className="w-full h-full right-0 top-0 absolute flex items-center justify-end -z-10 max-md:hidden">
                    <div
                        className={cn(
                            'clipss h-full'
                            // styles.imageContainer,
                            // 'space-y-7'
                        )}
                    >
                        <Image
                            src="/Home/creative-people-working-office.jpg"
                            height={700}
                            width={700}
                            alt="banner"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                {/* hero image end here */}
            </div>
            <Separator className="mt-10" />
        </section>
    );
};
export default Hero;
