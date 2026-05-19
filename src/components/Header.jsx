import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "मुखपृष्ठ", href: "#" },
    { name: "विकास योजनाएँ", href: "#" },
    { name: "किसान सेवा", href: "#" },
    { name: "शिक्षा", href: "#" },
    { name: "पंचायत", href: "#" },
    { name: "डिजिटल पहचान", href: "#" },
    { name: "संपर्क", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-saffron p-2 rounded-lg">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-brand-primary leading-tight">सूर्यपुरा</span>
              <span className="text-xs font-semibold text-brand-saffron tracking-wider">ग्राम विकास पोर्टल</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-brand-dark hover:text-brand-primary font-medium text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <button className="btn-primary py-2 px-5 text-sm">
              योजनाएँ देखें
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-border absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-brand-dark hover:text-brand-primary hover:bg-brand-bg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3">
              <button className="btn-primary w-full py-3">
                योजनाएँ देखें
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
