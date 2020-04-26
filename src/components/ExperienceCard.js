import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExperienceCard extends Component {
    render() {
        const {title, description, tags} = this.props.experience;

        return (
            <div className="flex flex-col w-360 h-auto m-4 bg-white border rounded-lg overflow-hidden">
                <div>
                    <h1
                        className="pl-4 pt-2 pr-4 font-semibold text-base sm:text-lg md:text-xl text-teal-900 tracking-wide break-normal"
                    >{title}</h1>
                    <p
                        className="text-xs sm:text-sm md:text-base pl-4 pt-2 pr-4 pb-4"
                    >{description}</p>
                    <div className="ml-4">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 text-sm text-gray-700 inline-block mb-4 mr-4 p-1 rounded-lg"
                        >
                            {tag}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
}

// PropTypes
ExperienceCard.propTypes = {
    experience: PropTypes.object.isRequired
}

export default ExperienceCard;
