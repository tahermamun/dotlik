import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

interface FaqItemProps {
    question: string;
    answer: string | string[];
    point?: string[];
    id?: number;
}

const FaqItem = ({ question, answer, point, id }: FaqItemProps) => {
    const [expanded, setExpanded] = useState(false);

    const toggleFaq = () => {
        setExpanded(!expanded);
    };

    const renderAnswer = (answer: string | string[]) => {
        if (Array.isArray(answer)) {
            return (
                <ul className="list-disc ml-5 space-y-2">
                    {answer.map((item) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            const paragraphs = answer
                .split('.')
                .map((paragraph, index, array) => (
                    <p key={index} className="mb-3">
                        {paragraph.trim()}
                        {index !== array.length - 1 && '.'}{' '}
                    </p>
                ));
            return paragraphs;
        }
    };

    const renderPoint = (point: string[]) => {
        return (
            <ul className="list-disc ml-5 space-y-2">
                {point.map((item) => (
                    <li key={id}>{item}</li>
                ))}
            </ul>
        );
    };

    return (
        <li>
            <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={expanded}
                onClick={toggleFaq}
            >
                <span className="flex-1 text-base-content">{question}</span>
                {expanded ? (
                    <FaMinus className="w-4 h-4 ml-auto fill-current" />
                ) : (
                    <FaPlus className="w-4 h-4 ml-auto fill-current" />
                )}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${expanded ? 'max-h-full' : 'max-h-0'}`}
            >
                <div className="pb-5 leading-relaxed">
                    {renderAnswer(answer)}
                    {point && renderPoint(point)}
                </div>
            </div>
        </li>
    );
};

export default FaqItem;
