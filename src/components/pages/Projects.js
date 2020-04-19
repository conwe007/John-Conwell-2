import React, { Component } from 'react';
import ProjectCard from '../ProjectCard'
import PropTypes from 'prop-types';

class Projects extends Component {
    render() {
        return (
            <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center">
                {this.props.projects.map(project => (
                    <ProjectCard
                        project={project}
                    />
                ))}
            </div>
        );
    }
}

// PropTypes
Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;
