import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Experiences from './components/pages/Experiences';
import Projects from './components/pages/Projects';

import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="containter">
                        <Navigation />
                        <Route
                            exact
                            path="/"
                            component={ Home }
                        />
                        <Route
                            exact
                            path="/projects"
                            component={ Projects }
                        />
                        <Route
                            exact
                            path="/experiences"
                            component={ Experiences }
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
