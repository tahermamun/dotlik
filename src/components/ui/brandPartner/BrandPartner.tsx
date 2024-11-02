'use client';
import SectionTitleBtn from '../SectionTitleBtn';
import Text from '../typography/typography';

const BrandPartner = () => {
    return (
        <section className="container py-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="space-y-2">
                    <SectionTitleBtn
                        className="bg-[#F5F5F5] text-[#5F6567] mb-8"
                        text="where we do"
                    />
                    <Text
                        className="mt-4"
                        text="Recognized by the best"
                        tag="h1"
                    />
                    <p className="text-lg">
                        The company needed to complete a complex migration on a
                        tight deadline to avoid millions of dollars in
                        post-contract fees and fines.
                    </p>
                </div>
                {/* right side  */}
                <div></div>
            </div>
        </section>
    );
};

export default BrandPartner;
