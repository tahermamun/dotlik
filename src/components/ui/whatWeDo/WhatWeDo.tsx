'use client';

import Image from 'next/image';
import SectionTitleBtn from '../SectionTitleBtn';
import ShapeDotImage from '/public/Home/shape-dots.svg';
import { Button } from '../button';

interface WhatWeDoProps {
    text: string;
    buttonText?: string;
}

const WhatWeDo = ({ text, buttonText }: WhatWeDoProps) => {
    return (
        <>
            <section className="relative my-8  overflow-hidden rounded-lg bg-[#242627] p-[25px] text-[#dee0ff]">
                <SectionTitleBtn
                    className="bg-section-bg1 text-section-text1 "
                    text="what we do"
                />
                <div className="h-[13vh] space-y-4"></div>
                <div className="mt-8 flex flex-col">
                    <div>
                        <h1 className="text-2xl font-semibold sm:text-2xl lg:text-left lg:text-4xl md:pr-[30%] sm:pr[15%] pr-1 mb-3">
                            {text}
                        </h1>
                        {buttonText && (
                            <Button variant="default">{buttonText}</Button>
                        )}
                    </div>

                    <div className="absolute bottom-[10%]  right-[-20%] sm:bottom-[-60%] sm:right-[4%]  md:bottom-[-40%]  lg:bottom-[-14%] xl:bottom-[-10%] xl:right-[10%]">
                        <Image
                            src={ShapeDotImage}
                            alt="shape_dot_image"
                            height={250}
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
export default WhatWeDo;
