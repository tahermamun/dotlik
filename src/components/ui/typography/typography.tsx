'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

export type TagType =
    | 'heading'
    | 'paragraph'
    | 'h1'
    | 'xs'
    | 'small'
    | 'terms'
    | 'link';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
    tag?: TagType;
    text: string;
    href?: string;
}

const Text = ({ tag, text, href = '/', className, ...rest }: TextProps) => {
    const getTag = (tag: TagType) => {
        switch (tag) {
            case 'heading':
                return (
                    <h2
                        className={cn(
                            'text-xl md:text-2xl text-tuatara-500',
                            className
                        )}
                        {...rest}
                    >
                        {text}
                    </h2>
                );
            case 'h1':
                return (
                    <h1
                        className={cn(
                            'text-3xl md:text-5xl text-tuatara-500 font-semibold',
                            className
                        )}
                        {...rest}
                    >
                        {text}
                    </h1>
                );
            case 'xs':
                return (
                    <p
                        className={cn('text-[12px] text-stone-500', className)}
                        {...rest}
                    >
                        {text}
                    </p>
                );
            case 'small':
                return (
                    <span
                        className={cn(
                            `text-[16px] text-stone-950 pl-1 leading-6`,
                            className
                        )}
                        {...rest}
                    >
                        {text}
                    </span>
                );
            case 'terms':
                return (
                    <span
                        className={cn(
                            `block text-base sm:text-lg  w-[100%]  lg:w-[70%] text-stone-950 mb-5 leading-6`,
                            className
                        )}
                        {...rest}
                    >
                        {text}
                    </span>
                );
            case 'link':
                return (
                    <Link
                        target="_blank"
                        href={href}
                        className={cn(
                            'text-pacific-500 cursor-pointer hover:text-pacific-700 border-b-2 border-pacific-500',
                            className
                        )}
                        {...rest}
                    >
                        {text}
                    </Link>
                );
            case 'paragraph':
            default:
                return (
                    <p
                        className={cn('text-sm text-tuatara-500', className)}
                        {...rest}
                    >
                        {text}
                    </p>
                );
        }
    };

    return getTag(tag || 'paragraph');
};

export default Text;
