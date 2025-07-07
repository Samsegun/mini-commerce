import { Metadata } from 'next';
import Image from 'next/image';
import Products from './_components/Products/Products';

import heroImage from '@/public/assets/bg.png';

export const metadata: Metadata = {
    title: 'Home | Mini-Commerce',
};

export default function Home() {
    return (
        <>
            <section
                className="relative bg-gradient-to-l from-blue-600 to-blue-800 flex justify-center items-center
             text-white overflow-hidden min-h-[70vh]"
            >
                {/* bg Image */}
                <Image
                    src={heroImage}
                    alt="Fashion store interior"
                    fill
                    className="object-cover opacity-30"
                    sizes="100vw"
                    priority
                    quality={50}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="app-maxwidth relative z-10 h-full">
                    <div className="px-2 py-12 md:p-8 xl:py-24 h-full flex flex-col justify-center text-center">
                        <h1 className="text-3xl mt-4 md:text-5xl font-bold mb-6 drop-shadow-lg">
                            Welcome to Mini-Commerce
                        </h1>

                        <p className="md:text-xl w-4/5 xl:w-8/12 mx-auto leading-relaxed italic drop-shadow-md">
                            Discover premium fashion for everyone. From stylish
                            men&apos;s wear to elegant women&apos;s collections,
                            we bring you quality clothing that defines your
                            unique style.
                        </p>
                    </div>
                </div>
            </section>

            {/* product list */}
            <main>
                <div className="app-maxwidth my-10 px-8">
                    <Products />
                </div>
            </main>
        </>
    );
}
