import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExperienceCard extends Component {
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
            <div>
                
            </div>
        );
    }
}

// PropTypes
ExperienceCard.propTypes = {
    experience: PropTypes.object.isRequired
}

export default ExperienceCard;
