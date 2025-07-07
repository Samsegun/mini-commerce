import { Metadata } from 'next';
import Products from './_components/Products/Products';

export const metadata: Metadata = {
    title: 'Home | Mini-Commerce',
};

export default function Home() {
    return (
        <>
            <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white">
                <div className="app-maxwidth">
                    <div className="px-2 py-5 md:p-8 xl:py-16">
                        <h1 className="text-3xl mt-4 md:text-5xl font-bold mb-6">
                            Welcome to Mini-Commerce
                        </h1>

                        <p className="md:text-xl w-4/5 leading-relaxed italic">
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
