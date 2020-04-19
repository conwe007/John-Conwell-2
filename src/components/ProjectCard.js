import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleClickEvent = (e) => {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div className={this.state.isOpen ? "flex flex-col md:flex-row w-full h-auto m-4 bg-white border rounded-lg overflow-hidden" : "flex flex-col w-300 h-480 m-4 bg-white border rounded-lg overflow-hidden"}>
                <img
                    className="max-w-260 max-h-260 border m-4"
                    src={this.props.project.imageUrl}
                    alt={this.props.project.imageAlt}
                    onClick={this.handleClickEvent}
                />
                <div>
                    <h1
                        className="pl-4 pt-2 pr-4 font-semibold text-xl text-teal-900 tracking-wide truncate"
                        onClick={this.handleClickEvent}
                    >{this.props.project.title}</h1>
                    <a
                        className="block pl-4 pt-2 pr-4 text-sm text-blue-600 tracking-wide truncate"
                        href={"https://" + this.props.project.link}
                    >{this.props.project.link}</a>
                    <p
                        className={this.state.isOpen ? "pl-4 pt-2 pr-4 pb-4" : "pl-4 pt-2 pr-4 pb-4 truncate"}
                        onClick={this.handleClickEvent}
                    >{this.props.project.description}</p>
                    {this.props.project.tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 text-sm text-gray-700 inline-block ml-4 mb-4 p-1 rounded-lg"
                            onClick={this.handleClickEvent}
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
