'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleBtnProps extends React.HTMLAttributes<HTMLElement> {
    text: string;
    className?: string;
}

const SectionTitleBtn = ({
    text,
    className,
    ...rest
}: SectionTitleBtnProps) => {
    return (
        <div
            className={cn(
                'text-[10px] px-4 py-2 rounded-md uppercase font-semibold inline-block',
                className
            )}
            {...rest}
        >
            {text}
        </div>
    );
};

export default SectionTitleBtn;
