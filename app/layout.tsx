import type { Metadata } from 'next';
import Header from './_components/Header/Header';
import { inter } from './fonts/fonts';
import './globals.css';
import ReactQueryProvider from './providers/ReactQueryProvider';

export const metadata: Metadata = {
    title: {
        template: '%s | Mini-Commerce',
        default: 'Mini-Commerce',
    },
    description: 'Shop for wide variety of products',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <div>
                    <Header />
                    <ReactQueryProvider>{children}</ReactQueryProvider>

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
