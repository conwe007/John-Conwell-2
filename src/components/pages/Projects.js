import React, { Component } from 'react';
import ProjectCard from '../ProjectCard';

import PropTypes from 'prop-types';

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="bg-gray-100 text-center">
                    <h1 className="py-4 font-semibold text-3xl sm:text-4xl md:text-5xl text-teal-900 tracking-wide">Projects</h1>
                </div>
                <div className="bg-gray-100 min-h-screen flex flex-wrap justify-center">
                    {this.props.projects.map(
                        (project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                openProject={this.props.openProject}
                                closeProject={this.props.closeProject}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

// PropTypes
Projects.propTypes = {
    projects: PropTypes.array.isRequired
}

export default Projects;
