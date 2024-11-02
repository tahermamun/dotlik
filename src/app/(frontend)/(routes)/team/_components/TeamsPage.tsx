'use client';
import Image from 'next/image';
import SectionHeader from '@/components/shared/sectionHeader/SectionHeader';
import Text from '@/components/ui/typography/typography';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
// import ContactUs from '@/components/shared/contactUs/ContactUs';

const TeamsPage = () => {
    return (
        <section className="pt-[7rem]">
            <div>
                <SectionHeader
                    sectionHeaderButtonText="Team"
                    h1Title="Learn more about us"
                    img="/team/team_cover_01.jpg"
                    headingTitle="Numerous degrees and certificates recognized by the industry are held by our workforce."
                    description="One of the many ways we strive to provide the best possible service to our clients is via ongoing investment in our employees' education and development. We only hire the most highly trained experts, and we constantly train and update them on the latest technology to help you win and develop your business."
                />
            </div>
            -{/* Meet the leadership */}
            {/* <div className="flex mt-[8rem] flex-col container">
                <div className="text-start">
                    <Text tag="h1" text="Meet the" className="font-extrabold" />
                    <Text
                        tag="h1"
                        text="leadership team"
                        className="font-extrabold my-2"
                    />
                </div>

                <div className=" my-10 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5">
                    <div className="border-b-2 border-gray-200 pb-4">
                        <Image
                            src="/team/team-1.webp"
                            width={500}
                            height={500}
                            alt="team-1"
                            className="h-auto w-full mt-8"
                        />
                        <Text
                            tag="heading"
                            text="John Doe"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="CEO" />
                    </div>
                    <div className="border-b-2 border-gray-200 pb-4">
                        <Image
                            src="/whyUs/GettyImages-3.webp"
                            alt="Placeholder"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="John Salivan"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Founder and Co-President" />
                    </div>
                    <div className="border-b-2 border-gray-200 pb-4">
                        <Image
                            src="/team/team-3.webp"
                            alt="Team-3"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Megan Palms"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Marketing Director" />
                    </div>

                    <div className="border-b-2 border-gray-200 pb-4">
                        <Image
                            src="/team/team-4.jpg"
                            alt="team-4"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Megan Palms"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Marketing Director" />
                    </div>
                </div>
            </div> */}
            {/* Our 80+ Team Section tempolary hidden */}
            <div className="container flex my-7 flex-col mt-24 hidden">
                <div className="text-start">
                    <Text
                        tag="h1"
                        text="Meet some of our 80+"
                        className="font-extrabold"
                    />
                    <Text
                        tag="h1"
                        text="team member"
                        className="font-extrabold my-2"
                    />
                    <Button className="mt-4" variant="default">
                        We are hiring
                    </Button>
                </div>

                <div className=" my-10 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-5 text-center">
                    <div className="">
                        <Image
                            src="/team/team-5.webp"
                            width={500}
                            height={500}
                            alt="team-5"
                            className="h-auto w-full mt-8"
                        />
                        <Text
                            tag="heading"
                            text="Salivan Dhoe"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Team Lead" />
                    </div>
                    <div className="">
                        <Image
                            src="/team/team-6.webp"
                            alt="team-6"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Joe Nickalson"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Senior Backend Developer" />
                    </div>
                    <div className="">
                        <Image
                            src="/team/team-7.webp"
                            alt="team-7"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Anton Throne"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Senior Developer" />
                    </div>

                    <div className="">
                        <Image
                            src="/team/team-8.webp"
                            alt="team-8"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="kevin Wolf"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Frontend Developer" />
                    </div>

                    <div className="">
                        <Image
                            src="/team/team-9.webp"
                            alt="team-9"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Dan Zalman"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Devops Engineer" />
                    </div>

                    <div className="">
                        <Image
                            src="/team/team-10.webp"
                            alt="team-10"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Megan Palms"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Senior Android Developer" />
                    </div>

                    <div className="">
                        <Image
                            src="/team/team-11.webp"
                            alt="team-11"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Carlos Montega"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Team Lead" />
                    </div>

                    <div className="">
                        <Image
                            src="/team/team-12.webp"
                            alt="team-12"
                            className="w-full mt-8 h-auto"
                            width={500}
                            height={500}
                        />
                        <Text
                            tag="heading"
                            text="Dan Zalman"
                            className="font-semibold mt-5 mb-2 "
                        />
                        <Text tag="small" text="Senior Frontend Developer" />
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 lg:mb-20 lg:mt-10 md:mb-14 md:gap-3 lg:gap-4">
                <div className="mt-6 md:pt-12 md:mt-0 order-2 md:order-1 ">
                    <Text
                        tag="h1"
                        text="Our Team Is Here to Support Your Team"
                        className="mb-6"
                    />
                    <Text
                        tag="terms"
                        text="Our technicians, engineers, business consultants, help desk specialists, and account managers have decades of combined IT experience, and they are laser-focused on your company and how we can help you succeed. You can rely on Dotlick to provide you with the individualized attention and team competence. For a free consultation to see how we can help with your most pressing IT requirements, get in touch with us right now."
                        className="opacity-80"
                    />

                    <Link href="contact">
                        <Button variant="default">Get in Touch</Button>
                    </Link>
                </div>

                <div className="order-1 md:order-2">
                    <div className="h-48 md:h-full">
                        <Image
                            src="/team/team_01.jpg"
                            alt="Team right cover"
                            height={500}
                            width={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* contact form  */}
            {/* <div className="lg:container">
                <ContactUs />
            </div> */}
        </section>
    );
};

export default TeamsPage;
