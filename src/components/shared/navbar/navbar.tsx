'use client';

import { Button } from '@/components/ui/button';
import Text from '@/components/ui/typography/typography';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCaretDownOutline } from 'react-icons/io5';
import { LuMenu, LuPhoneCall } from 'react-icons/lu';
import { useMediaQuery } from 'react-responsive';
import './nav.scss';
import NavCompany from './_components/company';
import MobileNavItems from './_components/mobileNav';
import NavServices from './_components/servies';
import Image from 'next/image';

const Navbar = () => {
    const mobileScreen = useMediaQuery({ maxWidth: 767 });
    const [toggle, setToggle] = useState<boolean>(false);

    useEffect(() => {
        if (!mobileScreen) {
            setToggle(false);
        }
    }, [mobileScreen]);

    return (

        <div className="w-full fixed left-0 top-0 z-50 navgation__bar">

            <div className="w-full border-b relative z-50 bg-white">
                <div className="container bg-white">
                    <div className="w-full flex justify-between gap-3 items-center ">
                        <Link href={'/'}>
                            <div className="flex items-center gap-3 py-3">
                                <Image
                                    src="/LOGO  - TEXT.png"
                                    height={500}
                                    width={500}
                                    alt="dotlik_logo"
                                    className="w-40 object-cover"
                                />
                            </div>
                        </Link>
                        <div className="flex max-md:hidden items-center justify-center gap-3 md:gap-5">
                            <div className="group duration-300 transition-all h-[60px] flex items-center">
                                <div className="flex items-center gap-1 cursor-pointer ">
                                    <Text
                                        text="Solutions"
                                        className="font-semibold text-sm text-tuatara-500 group-hover:text-pacific-500"
                                    />

                                    <IoCaretDownOutline className="text-xs mt-0.5 text-tuatara-500 group-hover:text-pacific-500" />
                                </div>

                                {/* Hover ui */}
                                <div className="w-full h-fit bg-white absolute left-0 top-[100%] py-10 border hidden group-hover:block">
                                    <div className="container">
                                        <NavServices />
                                    </div>
                                </div>
                            </div>

                            <div className="group duration-300 transition-all h-[60px] flex items-center">
                                <div className="flex items-center gap-1 cursor-pointer ">
                                    <Text
                                        text="Company"
                                        className="font-semibold text-sm text-tuatara-500 group-hover:text-pacific-500"
                                    />

                                    <IoCaretDownOutline className="text-xs mt-0.5 text-tuatara-500 group-hover:text-pacific-500" />
                                </div>

                                {/* Hover ui */}
                                <div className="w-full h-fit bg-white absolute left-0 top-[100%] py-10 border hidden group-hover:block">
                                    <div className="container">
                                        <NavCompany />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                            <div className="text-2xl">
                                <LuPhoneCall />
                            </div>
                            <div className="flex max-sm:hidden flex-col items-center justify-center gap-1 ">
                                <div className="bg-zinc-100 rounded flex items-center gap-2 px-3 py-1 hover:bg-pacific-100 transition-all duration-300 hover:text-pacific-600 cursor-pointer text-tuatara-400">
                                    <p className="text-xs font-bold">
                                        Client Support
                                    </p>
                                    <FaArrowRightLong size={10} className="" />
                                </div>


                                <a href="tel:+880 1893-900305">

                                    <Text
                                        text="+880 1893-900305"
                                        className="text-[15px] font-medium"
                                    />
                                </a>
                            </div>
                            <Link href="contact">
                                <Button className="py-5 px-6 text-semibold text-white">
                                    Contact
                                </Button>
                            </Link>
                            <Button
                                onClick={() => setToggle(!toggle)}
                                className="border p-1 rounded bg-tuatara-50 text-tuatara-500 cursor-pointer hidden max-md:block hover:bg-tuatara-200"
                            >
                                <LuMenu size={25} />
                            </Button>
                        </div>
                    </div>
                </div>

                <div
                    className={cn(
                        'max-h-screen  overflow-y-auto transition-all duration-300 fixed top-0 left-0 w-full bg-zinc-100 -z-10 pt-[80px] -translate-y-[100%]',
                        toggle && 'translate-y-0'
                    )}
                >
                    <MobileNavItems />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
