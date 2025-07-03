'use client';

import { Menu, X } from 'lucide-react';

type MenuButtonProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function MobileMenuButton({
  isMenuOpen,
  toggleMenu,
}: MenuButtonProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-blue-200 hover:bg-blue-700 rounded-lg transition-colors duration-200"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
}
