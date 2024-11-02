'use client';

import React from 'react';
import { BiPlus } from 'react-icons/bi';

import Text from '@/components/ui/typography/typography';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '../../ui/separator';

type DisplayHowWeDoType = {
    title: string;
    description: string;
    companies: string[];
};

const SliderCard = ({ title, description, companies }: DisplayHowWeDoType) => {
    return (
        <div className="bg-mine-600 p-4 rounded-lg flex flex-col justify-between h-full">
            <div>
                <Text
                    text={title}
                    className="text-2xl text-shark-200 font-bold"
                />

                <Text text={description} className="text-shark-200 mt-2" />
            </div>
            {/* <div className="flex items-center gap-1 mt-3 cursor-pointer group">
                <div className="w-7 h-7 rounded-full aspect-square bg-shark-400 flex items-center justify-center group-hover:bg-shark-500">
                    <BiPlus />
                </div>

                <Text
                    text="View More"
                    className="text-xs text-shark-200 font-bold"
                />
            </div> */}

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-0">
                    <AccordionTrigger
                        hideArrow={true}
                        className="flex items-center mt-3 cursor-pointer group justify-normal gap-2"
                    >
                        <div className="w-7 h-7 rounded-full aspect-square bg-shark-400 flex items-center justify-center group-hover:bg-shark-500">
                            <BiPlus />
                        </div>
                        <Text
                            text="View More"
                            className="text-sm text-shark-200 font-bold"
                        />
                    </AccordionTrigger>
                    <AccordionContent>
                        <Text
                            text="Companies Using This Technology:"
                            className="mt-3 text-shark-200"
                        />
                        <ul className="mt-2">
                            {companies?.map((company) => (
                                <>
                                    <li
                                        key={company}
                                        className="text-shark-50 text-lg list-none my-3"
                                    >
                                        {company}
                                        <Separator className="mt-2" />
                                    </li>
                                </>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default SliderCard;
