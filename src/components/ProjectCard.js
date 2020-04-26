import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Close } from '../assets/zondicons/close.svg';

class ProjectCard extends Component {
    empty = () => {

    }

    render() {
        const {id, imageUrl, imageAlt, title, link, description, tags, isOpen} = this.props.project;

        return (
            <div className={isOpen ? "right-0 left-0 top-0 sm:top-auto fixed flex flex-col md:flex-row w-auto h-auto m-3 bg-white border-4 border-teal-600 rounded-lg overflow-hidden" : "flex flex-col w-300 h-480 m-4 bg-white border rounded-lg overflow-hidden"}>
                <img
                    className="max-w-260 max-h-260 border m-4"
                    src={imageUrl}
                    alt={imageAlt}
                    onClick={isOpen ? this.empty : this.props.openProject.bind(this, id)}
                />
                <Close
                    className={isOpen ? "absolute top-4 right-4 h-6 w-6 fill-current cursor-pointer hover:text-red-700" : "hidden"}
                    onClick={this.props.closeProject.bind(this, id)}
                />
                <div>
                    <h1
                        className="pl-4 pt-2 pr-4 font-semibold text-base sm:text-lg md:text-xl text-teal-900 tracking-wide truncate"
                        onClick={isOpen ? this.empty : this.props.openProject.bind(this, id)}
                    >{title}</h1>
                    <a
                        className="block pl-4 pt-2 pr-4 text-xs sm:text-sm text-blue-600 hover:text-blue-900 tracking-wide truncate"
                        href={"https://" + link}
                    >{link}</a>
                    <p
                        className={isOpen ? "text-xs sm:text-sm md:text-base pl-4 pt-2 pr-4 pb-4" : "text-xs sm:text-sm md:text-base pl-4 pt-2 pr-4 pb-4 truncate"}
                        onClick={isOpen ? this.empty : this.props.openProject.bind(this, id)}
                    >{description}</p>
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 text-sm text-gray-700 inline-block ml-4 mb-4 p-1 rounded-lg"
                            onClick={isOpen ? this.empty : this.props.openProject.bind(this, id)}
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

// PropTypes
ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectCard;
