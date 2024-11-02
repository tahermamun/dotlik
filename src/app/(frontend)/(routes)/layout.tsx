import Navbar from '@/components/shared/navbar/navbar';
import React from 'react';
import LayoutWrapper from './layout-wrapper';
import Footer from '@/components/shared/footer/Footer';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <LayoutWrapper>
                <Navbar />
                <div className="pt-10">{children}</div>
                <Footer />
            </LayoutWrapper>
        </div>
    );
}
