import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from '../gallery/Logo2.png'
export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
        <div className="flex items-center justify-center h-full">
           <img src={logo} alt="Logo" className="w-1/4 h-auto" />
        </div>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Building Solutions That</span>
            <span className="block text-indigo-400">Drive Progress</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Inspiring progress across industries by delivering forward-thinking solutions that drive growth,
            efficiency, and meaningful change.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
           
          </div>
        </div>
      </div>
    </section>
  );
}