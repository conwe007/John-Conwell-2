import React, { Component } from 'react';

class Home extends Component {
    
    render() {
        return (
            <div>
                <div className="bg-gray-100 text-center">
                    <div className="pt-8 pb-2">
                        <img
                            src={process.env.PUBLIC_URL + "/images/headshot.png"}
                            alt="Headshot Portrait"
                            className="block ml-auto mr-auto rounded-full"
                        ></img>
                    </div>
                    <h1 className="mb-2 font-semibold text-3xl sm:text-4xl md:text-5xl text-teal-900 tracking-wide">John Conwell</h1>
                    <h2 className="font-serif text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-500 tracking-wide">Bachelor of Science in Electrical Engineering</h2>
                    <h2 className="pb-8 font-serif text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-500 tracking-wide">Minor in Computer Science</h2>
                </div>
                <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
                    <div className="w-2/3 mt-10 md:ml-40 md:mr-10 flex-auto">
                        <h1 className="font-semibold text-2xl sm:text-3xl text-teal-900 tracking-wide">About</h1>
                        <p className="text-gray-600">I am a recent graduate looking for full time employment in an electrical engineering or software engineering field. I have extensive experience in circuit design and simulation, experience with various kinds of software development, and excellent communication and documentation skills. I have a strong interest in software development, as well as the integration between software and hardware.</p>
                    </div>
                    <div className="w-2/3 md:w-1/3 mt-10 mb-10 md:mr-40 md:ml-10 flex-auto">
                        <h1 className="font-semibold text-2xl sm:text-3xl text-teal-900 tracking-wide">Contact</h1>
                        <ul className="text-xl text-gray-800">
                            <li className="hover:text-blue-700">
                                <a href="https://github.com/conwe007">
                                    <i className="fab fa-github-square fa-lg mr-2"></i>
                                    GitHub
                                </a>
                            </li>
                            <li className="hover:text-blue-700">
                                <a href="https://www.linkedin.com/in/john-conwell-129841117/">
                                    <i className="fab fa-linkedin fa-lg mr-2"></i>
                                    LinkedIn
                                </a>
                            </li>
                            <li className="hover:text-blue-700">
                                <a href="mailto:conwe007@umn.edu">
                                    <i className="fas fa-envelope-square fa-lg mr-2"></i>
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
