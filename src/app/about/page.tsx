'use client';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="space-y-12">
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
                            BMC Insights
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Fostering intellectual discourse and creative expression at British Model College
                        </p>
                    </div>

                    {/* About Section */}
                    <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                        <h2 className="text-3xl font-semibold text-blue-300 mb-6">
                            About Us
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            BMC Insights is a dynamic student-led organization at British Model College dedicated to exploring and sharing ideas through journalism, creative writing, and intellectual discourse. Our club serves as a platform for students to voice their thoughts, develop their writing skills, and engage with contemporary issues.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                            <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                                Our Mission
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    To promote creative expression and critical thinking
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    To develop strong writing and communication skills
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    To create a platform for student voices
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-8 shadow-2xl">
                            <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                                What We Do
                            </h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Publish monthly newsletters and articles
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Organize writing workshops and seminars
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-2">•</span>
                                    Host literary events and competitions
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center bg-gray-800 rounded-lg p-8 shadow-2xl">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-4">
                            Join Us
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Interested in becoming a part of BMC Insights? We're always looking for passionate writers, editors, and creative minds!
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition duration-300 transform hover:scale-105">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;