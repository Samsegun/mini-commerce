'use client';

import Link from 'next/link';

type MenuProps = {
    isMenuOpen: boolean;
};

export default function MobileMenu({ isMenuOpen }: MenuProps) {
    return (
        isMenuOpen && (
            <div className="md:hidden border-t border-blue-500">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        href="/mens"
                        className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded-md transition-colors duration-200 font-medium"
                    >
                        Men&apos;s
                    </Link>

                    <Link
                        href="/womens"
                        className="block px-3 py-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded-md transition-colors duration-200 font-medium"
                    >
                        Women&apos;s
                    </Link>
                    <div className="px-3 py-2">
                        <button className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200">
                            <span className="font-medium">Cart</span>
                            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}
