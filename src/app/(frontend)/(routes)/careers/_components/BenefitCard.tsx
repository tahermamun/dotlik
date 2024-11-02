import React from 'react';
import Text from '@/components/ui/typography/typography';
import benefitCardsData from './benefitCards.json';

const BenefitCard = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            {benefitCardsData.map((card) => (
                <div
                    key={card.title}
                    className="bg-pacific-100 shadow py-16 pl-8 pr-8 rounded-sm"
                >
                    <Text
                        text={card.title}
                        tag="heading"
                        className="text-tuatara-900 font-semibold mb-4"
                    />
                    <Text tag="small" text={card.description} />
                </div>
            ))}
        </div>
    );
};

export default BenefitCard;
