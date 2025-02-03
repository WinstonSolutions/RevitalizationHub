// src/components/Header/index.tsx
import React, { useState } from "react";
import { HomeIcon, MenuIcon, XIcon } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "projects" },
  //   { label: "Students", href: "students" },
  { label: "Property Owners", href: "owners" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-[rgb(22,59,141)] shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="https://www.winnipeg.ca/themes/custom/confluence/img/cw-v-white-rgb.svg"
                // src="images/logo-hub.jpg"
                alt="Home Icon"
                className="h-16 w-50"
              />
            </a>
            <a href="/" className="ml-2">
              <span className="text-xl font-bold text-white whitespace-nowrap">
                Revitalization Hub
              </span>
            </a>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-bold text-white whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => (window.location.href = "/owners")}
              className="px-4 py-2 bg-white text-[rgb(22,59,141)] rounded-md hover:bg-gray-100"
            >
              Contact Us
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-row items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-gray-200"
                >
                  {item.label}
                </a>
              ))}
              <button className="px-4 py-2 bg-white text-[rgb(22,59,141)] rounded-md hover:bg-gray-100">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
