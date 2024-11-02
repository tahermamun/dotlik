import { cn } from '@/lib/utils';

interface DisplayReviewTypes {
    label: string;
    description: string;
    value: string;
    isLast?: boolean;
}
const DisplayReview = ({ label, value, description }: DisplayReviewTypes) => {
    return (
        <>
            <div className={cn('')}>
                <h1 className="font-bold text-xl md:text-2xl ">
                    {label} <span className="text-xs md:text-xl">{value}</span>
                </h1>
                <p>{description}</p>
            </div>
        </>
    );
};
export default DisplayReview;
