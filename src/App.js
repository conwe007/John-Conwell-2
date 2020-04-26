import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Experiences from './components/pages/Experiences';
import Projects from './components/pages/Projects';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    state = {
        projects: [
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_cellular_automata.png",
                imageAlt: "Cellular Automata Thumbnail",
                title: "Elementary Cellular Automata",
                link: "github.com/conwe007/Elementary-Cellular-Automata",
                description: "This project generates an array of cells based on Wolfram's elementary cellular automata rules. The user specifies input parameters such as number of cells and amount of time, and the program propogates the values through an array based on the specified rule. The program also allows for reading an array from a text file, writing an array to a text file, and printing an array to the console. The program allows for graphical representation of the array, either static or scrolling, using SDL. You can read more about cellular automata here.",
                tags: ["C", "Simulation"],
                isOpen: false
            },
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_cpp_auto_generate.png",
                imageAlt: "Cpp Auto Generate Thumbnail",
                title: "Cpp Auto Generate",
                link: "github.com/conwe007/Cpp-Auto-Generate",
                description: "This program takes a C++ header file as input and creates a matching C++ class file with empty function definitions. I was motivated to create this program after starting several projects and having to go through the tedious process of writing redundant code in both header and class files.",
                tags: ["C", "Utility"],
                isOpen: false
            },
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_mancala.png",
                imageAlt: "Mancala Thumbnail",
                title: "Mancala",
                link: "github.com/conwe007/Mancala",
                description: "This project is a mancala simulator supporting human and AI players. Multipurpose, with the ability to play single games against either a player or a variable difficulty AI, or simulate thousands of games against different AIs to evaluate performance. Limited functionality in creating AI through machine learning.",
                tags: ["Java", "C++", "Simulation", "Game"],
                isOpen: false
            },
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_pandemic.png",
                imageAlt: "Pandemic Thumbnail",
                title: "Pandemic",
                link: "github.com/conwe007/Pandemic",
                description: "This program simulates the spread of a virus through a population. The population is made up of individuals, who each have a status (healthy, infected, or immune). Initially, one individual is infected while the rest are healthy. The simulation takes place over multiple time steps. During each time step, individuals are put into random groups of sizes between 1 and [max group size]. If a healthy individual is grouped with an infected individual, the healthy individual becomes infected. After a certain amount of time, infected individuals become immune, and can no longer become infected or spread infection. This program was inspired by the COVID-19 epidemic and the effects social distancing had to slow it.",
                tags: ["C", "Simulation"],
                isOpen: false
            },
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_grid_battle.png",
                imageAlt: "Grid Battle Thumbnail",
                title: "Grid Battle",
                link: "github.com/conwe007/Grid-Battle",
                description: "This project is a simple game comprised of two teams of characters arranged in a 2x4 grid. Each character is one of several jobs (often referred to as classes), with various stats and actions. Each action can damage other character(s), heal other character(s), swap places with another character, or a combination of the three. Each action is only usable from certain positions on the grid, and has specified target positions from each valid position.",
                tags: ["C++", "Game"],
                isOpen: false
            },
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_poker_statistics.png",
                imageAlt: "Poker Statistics Thumbnail",
                title: "Poker Statistics",
                link: "github.com/conwe007/Poker-Statistics",
                description: "This program simulates many 5 and 7 card poker hands, and compiles statistics about their frequency which it prints to the console.",
                tags: ["Java", "Simulation"],
                isOpen: false
            },
            {
                id: uuidv4(),
                imageUrl: "/images/thumbnail_personal_website.png",
                imageAlt: "Personal Website Thumbnail",
                title: "Personal Website",
                link: "github.com/conwe007/John-Conwell-2",
                description: "The website you are reading right now! This website is my second attempt at creating a full-fledged website, this time using ReactJS. Compared to the first attempt, this website is more responsive, uses better styling tools (tailwind), and is easier to maintain and update.",
                tags: ["ReactJS", "Tailwind", "WebDev"],
                isOpen: false
            },
        ],
        experiences: [
            {
                id: uuidv4(),
                employer: "The Toro Company",
                title: "Monte Carlo Circuit Analysis",
                description: "Used PSpice to model and simulate circuits; determined circuit tolerances, identified relative sources of error within the circuits",
                tags: ["PSpice", "Circuit Simulation", "Analog Circuit Design"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "The Toro Company",
                title: "Wireless Recharging Battery Circuit",
                description: "Identified and corrected errors in a preliminary circuit design, worked with component vendors to choose parts, finalized design in Cadence, performed debugging on physical circuit",
                tags: ["OrCad Capture", "Analog Circuit Design", "Circuit Debugging", "Component Selection"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "The Toro Company",
                title: "Capacitive Touchscreen Configuration",
                description: "Used Arduino to develop configurator to interface with CapSense chip via I2C, created a parsing script in Python to generate a c-compatible matrix from binary configuration file",
                tags: ["I2C", "Python", "C", "Circuit Debugging", "Arduino"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "The Toro Company",
                title: "Software Testing",
                description: "Tested and performed CAN analysis on new oscilloscope emulation software, identified software bugs and steps to reproduce them",
                tags: ["CAN", "Software Bug Identification"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "The Toro Company",
                title: "Harness Creation/Wiring",
                description: "Referred to schematic to design harnesses for use in testing/programming controllers, rewired incorrectly manufactured harnesses",
                tags: ["Harness Creation", "Electrical Schematics"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "The Toro Company",
                title: "Warranty Analysis",
                description: "Used oscilloscope to set triggers and measure inrush/outrush through components, identified failed components in complex PCBs by referring to the schematic",
                tags: ["Oscilloscopes", "Analog Circuit Debugging"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "Honda R&D Americas",
                title: "MOST-CAN Gateway Database Design",
                description: "Designed a database to hold MOST and CAN messages and mappings between them, developed methods to populate the database from excel sheets/CSVs, implemented functionality to automatically generate MCG variations between different vehicle specs/destinations",
                tags: ["Database Design", "SQL", "HTML"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "Honda R&D Americas",
                title: "MOST-CAN Gateway Debugging",
                description: "Tested gateway mappings using NUnit, on testbenches and vehicles",
                tags: ["CAN", "Software Debugging", "Automated Tests"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "Honda R&D Americas",
                title: "Infotainment Development Flow",
                description: "Created a presentation highlighting the benefits of a new infotainment development flow by dividing into important time periods and subject matters to give executive decision makers easily digestible information",
                tags: ["Project Management", "Microsoft Powerpoint", "Software Development Cycle"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "Honda R&D Americas",
                title: "GPS Error Debugging",
                description: "Identified and fixed errors in an excel macro that measured GPS performance of current vehicles against a test vehicle",
                tags: ["GPS", "Microsoft VBA", "Microsoft Excel"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "Honda R&D Americas",
                title: "Infotainment Testing",
                description: "Tested infotainment systems on multiple vehicles according to predefined test cases, many of which were specific to infotainment “benches”, which had to be interpreted in a mass production vehicle sense",
                tags: ["Hardware Testing", "Test Case Creation"],
                isOpen: false,
            },
            {
                id: uuidv4(),
                employer: "Honda R&D Americas",
                title: "Project Resource Management",
                description: "Transferred vehicle development schedule information in various formats (excel, PowerPoint, image, etc.) into a single and easily navigable excel sheet",
                tags: ["Microsoft Excel"],
                isOpen: false,
            },
        ]
    }

    openProject = (id) => {
        this.setState({projects: this.state.projects.map(
            project => {
                if(project.id === id)
                {
                    project.isOpen = true;
                } else
                {
                    project.isOpen = false;
                }

                return project;
            }
        )})
    }

    closeProject = (id) => {
        this.setState({projects: this.state.projects.map(
            project => {
                if(project.id === id)
                {
                    project.isOpen = false;
                }

                return project;
            }
        )})
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Route
                        exact
                        path="/"
                        component={ Home }
                    />
                    <Route
                        exact
                        path="/projects"
                        render={(props) => <Projects {...props} projects={this.state.projects} openProject={this.openProject} closeProject={this.closeProject} />}
                    />
                    <Route
                        exact
                        path="/experiences"
                        render={(props) => <Experiences {...props} experiences={this.state.experiences} />}
                    />
                </div>
            </Router>
        );
    }
}

export default App;
