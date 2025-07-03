import { useState } from 'react';

function useMobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return { isMobileMenuOpen, toggleMobileMenu };
}

export default useMobileMenu;
