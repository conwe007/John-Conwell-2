import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Menu } from '../../assets/zondicons/menu.svg';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    
    handleButtonClick = (e) => {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <header className="bg-white border-b border-gray-400 text-black text-2xl font-semibold tracking-widest sm:flex sm:justify-between sm:items-center">
                <div className={this.state.isOpen ? "flex justify-between items-center border-b border-gray-400 sm:border-0" : "flex justify-between items-center"}>
                    <div>
                        <Link className="block hover:bg-teal-100 hover:text-teal-800 p-4" to="/">JOHN CONWELL</Link>
                    </div>
                    <div>
                        <button type="button" onClick={this.handleButtonClick} className="text-gray-700 p-4 hover:bg-teal-100 focus:outline-none sm:hidden">
                            <Menu className="h-6 w-6 fill-current" />
                        </button>
                    </div>
                </div>
                <div className={this.state.isOpen ? "sm:flex" : "hidden sm:flex"}>
                    <Link className="block hover:bg-teal-100 hover:text-teal-800 p-4 border-b border-gray-400 sm:border-0" to="/projects">PROJECTS</Link>
                    <Link className="block hover:bg-teal-100 hover:text-teal-800 p-4" to="/experiences">EXPERIENCES</Link>
                </div>
            </header>
        );
    }
}

// PropTypes
Navigation.propTypes = {

}

export default Navigation;
