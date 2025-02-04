import React, { useState } from 'react';
import { ArrowRight, ArrowUpRightFromSquare, Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ArrowRight className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-white">LogicNest</span>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-baseline space-x-4">
              <a href="/#home" className="text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/#services" className="text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="/#about" className="text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href='/lifeAtLogicNest' className="text-gray-300 hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium">Life at LogicNest</a>
              <a href="/#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">Contact Us</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-indigo-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400">Home</a>
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400">Services</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400">About</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}