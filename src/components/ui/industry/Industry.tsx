'use client';
import SectionTitleBtn from '../SectionTitleBtn';
import Text from '../typography/typography';
import DisplayIndustry from './DisplayIndustry';

const Industry = () => {
    // all industry data
    const industries = [
        {
            id: 1,
            img: '/Home/industry_image_01.jpg',
            title: ' Industry & Manufacturing',
        },
        {
            id: 2,
            img: '/Home/industry_image_02.jpg',
            title: ' Transportation & Logistics',
        },
        {
            id: 3,
            img: '/Home/industry_image_03.jpg',
            title: 'Healthcare',
        },
        {
            id: 4,
            img: '/Home/industry_image_04.jpg',
            title: 'E-commerce Industry',
        },
        {
            id: 5,
            img: '/Home/industry_image_05.jpg',
            title: 'Consulting Providers',
        },
        {
            id: 6,
            img: '/Home/industry_image_06.jpg',
            title: 'Non-Profit',
        },
        {
            id: 7,
            img: '/Home/industry_image_07.jpg',
            title: 'Travel Industry ',
        },
        {
            id: 8,
            img: '/Home/industry_image_08.jpg',
            title: 'Education & Training ',
        },
        {
            id: 9,
            img: '/Home/industry_image_09.jpg',
            title: 'Real Estate',
        },
    ];

    // Most of the time we should have to use self closing tag rather than we receiving the children as props!

    return (
        <div className="container p-5 my-8   max-w-screen-md mx-auto">
            <SectionTitleBtn
                className="bg-[#F5F5F5]
                text-[#5F6567] "
                text="how we do"
            />
            <Text
                className="mt-4"
                text="Solving IT challenges in every industry, every day."
                tag="h1"
            />
            {/* all data maping and showing DisplayIndustry component */}
            <div className="flex flex-wrap gap-5 mt-10 ">
                {industries?.map((industry) => (
                    <DisplayIndustry
                        key={industry?.id}
                        img={industry?.img}
                        title={industry?.title}
                    />
                ))}
            </div>
            {/* <div className="mt-10">
                <span className="text-pacific-500 border-b-2 border-[#DEE0FF] text-sm font-medium hover:cursor-pointer">
                    View All Industries
                </span>
            </div> */}
        </div>
    );
};
export default Industry;
