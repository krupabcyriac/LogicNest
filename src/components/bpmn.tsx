export default function Bpmn() {

    const details = [
        {
            title: 'Model',
            description: 'Easily create your own BPMN 2.0 diagrams using a web-based modeling component.',
        },
        {
            title: 'Embed and Annotate',
            description: 'Use the toolkit to embed BPMN 2.0 diagrams into your applications. Enrich them with the data that is important for you and your business.',
        },
        {
            title: 'Extend',
            description: 'Integrate an in-browser process engine, token simulation, custom elements, styling or modeling rules. It is up to you because bpmn-js is an open toolkit.',
        },
        {
            title: 'Extend',
            description: 'Integrate an in-browser process engine, token simulation, custom elements, styling or modeling rules. It is up to you because bpmn-js is an open toolkit.',
        }
    ];

    const workflow = [
        {
            title: 'Step 1: Describe Your Process',
            description: 'Simply explain your business process in plain English. Nexoras advanced AI understands natural language and converts your description into professional BPMN diagrams. No technical knowledge required - just tell us what your process does, and we will handle the rest.',
        },
        {
            title: 'Step 2: Automatic BPMN Creation',
            description: 'Watch as Nexoras AI instantly transforms your description into a complete BPMN 2.0 diagram. Our intelligent system identifies tasks, decisions, events, and flows, creating a professional process diagram that follows industry standards. Make adjustments in real-time using our intuitive editor.',
        },
        {
            title: 'Step 3: Share and Export',
            description: 'Save your diagrams in multiple formats (BPMN, SVG, PNG, JPEG), making it easy to share with your team. Nexora stores your projects securely in the cloud, allowing you to access and modify them anytime. Collaborate with team members and maintain version control of your process diagrams.',
        }
    ];

    return (
        <section id="bpmn">
            <section id="title-section" className="pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="flex items-center justify-center h-full">
                        </div>
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Nexora</span>
                            <span className="block text-indigo-400">Transform Processes</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Revolutionizing business process management through AI-powered solutions that streamline workflows, enhance efficiency, and drive digital transformation across organizations.
                        </p>
                        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                            <div className="rounded-md shadow">
                                <a href="https://nexora-smart-bpmn.vercel.app" target="_blank" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="services" className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            BPMN everywhere, for everyone
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                        Design, share, and implement business processes right in your browser. Whether you're a beginner or expert, Nexora makes process modeling accessible to all.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-300">
                            Experience the future of business process management with our Smart BPMN platform.
                            Streamline your workflows with intelligent automation and data-driven insights.
                        </p>
                    </div>
                </div>
            </section>
            <section id="workflow" className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            How Nexora BPMN Generator Works
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
                            Our BPMN generator simplifies the process of creating and managing business workflows. Here's how it works:
                        </p>
                    </div>
                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {workflow.map((step, index) => (
                            <div
                                key={index}
                                className="relative group bg-gray-900 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-white">
                                        <span className="absolute" aria-hidden="true" />
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-300">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>

    );
}