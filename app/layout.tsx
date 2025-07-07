import type { Metadata } from 'next';
import Header from './_components/Header/Header';
import ReactQueryProvider from './_providers/ReactQueryProvider';
import { inter } from './fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'Mini-Commerce',
        template: '%s | Mini-Commerce',
    },
    description: 'Shop a wide variety of quality products at Mini-Commerce.',
    keywords: [
        'ecommerce',
        'shop',
        'products',
        'mini-commerce',
        'online store',
    ],
    authors: [
        {
            name: 'Mini-Commerce Team',
            url: 'https://minicommerce-samsegun.vercel.app/',
        },
    ],
    metadataBase: new URL('https://minicommerce-samsegun.vercel.app/'),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <div className="relative">
                    <Header />
                    <ReactQueryProvider>
                        <div className="page bg-gray-50">{children}</div>
                    </ReactQueryProvider>

                    <footer className="bg-blue-600 h-16 flex items-center justify-center shadow-lg">
                        <p className=" text-white  mx-auto  gap-2 font-bold">
                            <span>&copy;{new Date().getUTCFullYear()}</span>{' '}
                            <span>Mini-Commerce</span>
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
