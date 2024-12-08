import React from 'react';
import { Target, Rocket, Heart, Focus } from 'lucide-react';
import CoreValues from './CoreValues';
import Team from './Team';

export default function About() {
  return (
    <section id="about" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            About LogicNest
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Founded in 2024, we're committed to driving digital transformation
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Target className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">Vision</h3>
              <p className="mt-2 text-base text-gray-300">
                Building solutions that drive progress and shape the future of technology.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Rocket className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">Mission</h3>
              <p className="mt-2 text-base text-gray-300">
                To inspire progress across industries by delivering forward-thinking solutions
                that drive growth, efficiency, and meaningful change.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Focus className="h-12 w-12 text-indigo-400" />
              </div>
              <h3 className="mt-6 text-xl font-medium text-white">Purpose</h3>
              <p className="mt-2 text-base text-gray-300">
                Develop future-ready IT solutions while making a significant impact
                on the digital world.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CoreValues />
      <Team />
    </section>
  );
}