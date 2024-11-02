'use client';
import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';
import Image from 'next/image';
import React from 'react';

interface SectionHeaderProps {
    img: string;
    h1Title: string;
    headingTitle: string;
    description: string;
    sectionHeaderButtonText?: string;
}

const SectionHeader = ({
    img,
    h1Title,
    headingTitle,
    description,
    sectionHeaderButtonText,
}: SectionHeaderProps) => {
    return (
        <section>
            <div className="text-center container sm:mb-10 mb-6">
                <SectionTitleBtn
                    text={sectionHeaderButtonText || ''}
                    className="text-[#000000] bg-[#f5f5f5]"
                />
                <Text
                    tag="h1"
                    text={h1Title}
                    className="text-3xl lg:text-6xl font-extrabold max-w-3xl m-auto sm:my-6 my-4"
                />
                <Text tag="heading" text={headingTitle} />
            </div>
            <div className="my-4 2xl:container w-full m-auto">
                <div>
                    <Image
                        src={img}
                        alt="why page cover photo"
                        width={1280}
                        height={500}
                        className="object-cover w-full min-h-52  bg-cover bg-no-repeat bg-top"
                    />
                </div>
            </div>

            <div className="md:mt-20 mt-8 lg:mx-auto container lg:max-w-5xl">
                <Text
                    tag="paragraph"
                    text={description}
                    className="text-lg md:text-xl"
                />
            </div>
        </section>
    );
};

export default SectionHeader;
