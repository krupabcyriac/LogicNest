import React from 'react';
import { Target, Shield, BookOpen } from 'lucide-react';

const values = [
  {
    title: 'Impact-Driven',
    description: 'Our commitment lies in creating solutions that tackle problems and promote substantial change in various industries.',
    icon: Target,
  },
  {
    title: 'Promise',
    description: 'We are committed to keeping our word with honesty, dependability, excellence, and trust with every solution we provide.',
    icon: Shield,
  },
  {
    title: 'Continuous Learning',
    description: 'We are dedicated to preserving our position as industry leaders by investing in expertise, abilities, and the latest technical developments.',
    icon: BookOpen,
  },
];

export default function CoreValues() {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            The principles that guide our every decision and action
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900">
                <value.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">{value.title}</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}