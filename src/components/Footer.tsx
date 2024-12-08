import React from 'react';
import { Code2, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <ArrowRight className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">LogicNest</span>
            </div>
            <p className="mt-4 text-base text-gray-400">
              Building solutions that drive progress. We're committed to delivering
              innovative technology solutions that help businesses thrive in the
              digital age.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#home" className="text-base text-gray-300 hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-gray-300 hover:text-indigo-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-base text-gray-300 hover:text-indigo-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-gray-300 hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Connect With Us
            </h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://www.linkedin.com/in/logic-nest-95156233a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/logicnest.2024/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="text-center text-base text-gray-400">
            <span>© {new Date().getFullYear()} LogicNest. All rights reserved.</span>
            <div className="mt-2">
              DISCLAIMER: This is not a registered company Webpage. Demonstration for Planspiel Web Engineering project.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}