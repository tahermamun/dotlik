'use client';

import React, { useEffect } from 'react';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
    let lastScroll = 0;

    useEffect(() => {
        window.addEventListener('scroll', handlenav);

        return () => {
            window.removeEventListener('scroll', handlenav);
        };
    }, []);

    function handlenav() {
        const body = document.body;

        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove('scroll-up');
        }
        if (
            currentScroll > lastScroll &&
            !body.classList.contains('scroll-down')
        ) {
            body.classList.remove('scroll-up');
            body.classList.add('scroll-down');
        }
        if (
            currentScroll < lastScroll &&
            body.classList.contains('scroll-down')
        ) {
            body.classList.remove('scroll-down');
            body.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    }

    return <>{children}</>;
};

export default LayoutWrapper;
