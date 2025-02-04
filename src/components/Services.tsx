import React from 'react';
import { Workflow, Settings, Share2 } from 'lucide-react';

const services = [
  {
    title: 'Smart Process Modeling',
    description: 'Intuitive BPMN modeling with AI-powered suggestions and real-time validation',
    icon: Workflow,
    link: '/bpmn',
  },
  {
    title: 'Process Optimization',
    description: 'AI-driven analysis to identify bottlenecks and suggest improvements in your workflows',
    icon: Settings,
  },
  {
    title: 'Collaboration Tools',
    description: 'Real-time collaboration features for team-based process modeling and review',
    icon: Share2,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Smart BPMN 
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Next-generation business process modeling powered by artificial intelligence
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-gray-800 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-indigo-900 text-indigo-300 ring-4 ring-gray-800">
                  <service.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  <span className="absolute" aria-hidden="true" />
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {service.description}
                </p>
                {service.link && (
                  <a
                  href={service.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
                  >
                  Learn more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300">
            Experience the future of business process management with our Smart BPMN platform.
            Streamline your workflows with intelligent automation and data-driven insights.
          </p>
        </div>
      </div>
    </section>
  );
}