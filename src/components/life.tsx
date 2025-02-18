import image1img from '../gallery/image1.jpg';
import image2img from '../gallery/image2.jpg';
import image3img from '../gallery/image3.jpeg';
import image4img from '../gallery/image4.jpeg';
import image5img from '../gallery/image5.jpeg';

export default function Life() {
    return (
        <section id="life-at-logicnest">
            {/* Hero Section */}
            <section id="title-section" className="pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Life at LogicNest</span>
                            <span className="block text-indigo-400">A Culture of Innovation</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Discover what makes our team special and how we work together to create amazing solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Work Culture Section */}
            <section id="work-culture" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={image3img}
                            alt="Team collaboration"
                            className="w-full h-96 object-cover"
                        />
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Our Work Culture</h3>
                            <p className="text-gray-300 mb-4">
                                At LogicNest, we believe in fostering an environment where creativity and innovation thrive. Our open-office layout encourages collaboration and spontaneous discussions, while our flexible work hours ensure everyone can maintain a healthy work-life balance.
                            </p>
                            <p className="text-gray-300 mb-4">
                                We embrace a culture of continuous learning, with regular knowledge-sharing sessions, tech talks, and opportunities for professional development. Every team member is encouraged to bring their unique perspectives and ideas to the table.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Activities Section */}
            <section id="team-activities" className="py-20 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                            <img
                                src={image5img}
                                alt="Team meeting"
                                className="rounded-lg h-48 w-full object-cover"
                            />
                            <img
                               src={image2img}
                                alt="Team outing"
                                className="rounded-lg h-48 w-full object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Team Activities & Events</h3>
                            <p className="text-gray-300 mb-4">
                                We believe that the best teams are built on strong relationships. That's why we regularly organize team activities, from casual Friday game sessions to quarterly team outings. These events help us bond, recharge, and celebrate our achievements together.
                            </p>
                            <p className="text-gray-300 mb-4">
                                Our annual hackathons are particularly exciting, where teams come together to innovate and build creative solutions in just 48 hours. These events not only foster innovation but also strengthen our collaborative spirit.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth & Development Section */}
            <section id="growth" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={image4img}
                            alt="Learning session"
                            className="w-full h-96 object-cover"
                        />
                        <div className="p-8">
                            <h3 className="text-2xl font-semibold text-white mb-4">Growth & Development</h3>
                            <p className="text-gray-300 mb-4">
                                Professional growth is at the heart of our culture. We provide numerous opportunities for skill development, including mentorship programs, conference attendance, and dedicated learning time. Our team members are encouraged to explore new technologies and share their knowledge with others.
                            </p>
                            <p className="text-gray-300 mb-4">
                                We also maintain a healthy feedback culture, with regular one-on-ones and team retrospectives that help us continuously improve our processes and work environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
}