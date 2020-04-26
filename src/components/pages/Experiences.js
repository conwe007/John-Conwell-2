import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExperienceCard from '../ExperienceCard';

class Experiences extends Component {
    render() {
        return (
            <div>
                <div className="bg-gray-100 text-center">
                    <h1 className="py-4 font-semibold text-3xl sm:text-4xl md:text-5xl text-teal-900 tracking-wide">Experiences</h1>
                </div>
                <div className="bg-gray-100 border-b">
                    <div className="text-center">
                        <a href="https://www.thetorocompany.com">
                            <img
                                className="inline-block max-w-260 max-h-260 m-4 border"
                                src="images/thumbnail_toro.png"
                                alt="The Toro Company Thumbnail"
                            ></img>
                        </a>
                        <div className="inline-block">
                            <a href="https://www.thetorocompany.com">
                                <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-teal-900 tracking-wide">The Toro Company</h2>
                            </a>
                            <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-500 tracking-wide">Electrical Engineering Co-op</h3>
                            <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-500 tracking-wide">January 2018 - August 2018</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        {this.props.experiences.filter((experience) => (
                                experience.employer === "The Toro Company"
                            )).map((experience) => (
                                <ExperienceCard
                                    key={experience.id}
                                    experience={experience}
                                    openExperience={this.props.openExperience}
                                    closeExperience={this.props.closeExperience}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="bg-gray-100 border-b">
                    <div className="text-center">
                        <a href="https://www.hondaresearch.com/">
                            <img
                                className="inline-block max-w-260 max-h-260 m-4 border"
                                src="images/thumbnail_honda.png"
                                alt="Honda Thumbnail"
                            ></img>
                        </a>
                        <div className="inline-block">
                            <a href="https://www.hondaresearch.com/">
                                <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl text-teal-900 tracking-wide">Honda R&D Americas</h2>
                            </a>
                            <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-500 tracking-wide">Electrical Engineering Intern</h3>
                            <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-500 tracking-wide">May 2019 - August 2019</h3>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                    {this.props.experiences.filter((experience) => (
                                experience.employer === "Honda R&D Americas"
                            )).map((experience) => (
                                <ExperienceCard
                                    key={experience.id}
                                    experience={experience}
                                    openExperience={this.props.openExperience}
                                    closeExperience={this.props.closeExperience}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// PropTypes
Experiences.propTypes = {
    experiences: PropTypes.array.isRequired
}

export default Experiences;
