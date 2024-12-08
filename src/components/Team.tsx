import React from 'react';

import kamrunimg from '../gallery/afia.jpg';
import aryaimg from '../gallery/arya.jpg';
import Rishonimg from '../gallery/rishon.jpg';
import krupaimg from '../gallery/krupa.jpg';
import faridimg from '../gallery/farid.jpg';


const team = [
  {
    name: 'Kamrun Naher',
    role: 'Manager',
    image: kamrunimg,

  },
  {
    name: 'Arya Sasi Kumar',
    role: 'Business Analyst',
    image: aryaimg,
    
  },
  {
    name: 'Rishon M Mathew',
    role: 'Frontend Developer',
    image: Rishonimg,
   
  },
  {
    name: 'Krupa Benny',
    role: 'Backend Developer',
    image: krupaimg,
   
  },
  {
    name: 'Farid Mammadov',
    role: 'Software Tester',
    image: faridimg,
  },
];
export default function Team() {
  return (
    <div className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Passionate experts driving innovation and excellence
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-indigo-400"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}