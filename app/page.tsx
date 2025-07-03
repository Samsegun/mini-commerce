import Products from './_components/Products/Products';

export default function Home() {
    return (
        <div className="page bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-blue-600 to-blue-800 text-white">
                {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> */}
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
                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                                Shop Men&apos;s
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                                Shop Women&apos;s
                            </button>
                        </div> */}
                        {/* <div className="flex justify-center">
                            <input
                                type="text"
                                name="product"
                                placeholder="Search products..."
                                className="w-full p-2 text-black rounded-xl outline-none"
                            />
                        </div> */}
                    </div>
                </div>
            </section>

            <Products />
        </div>
    );
}
