import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="port_out port1 glass"><a href="https://github.com/Maxs22/heroes"><img src={project1} className="po1"></img>App to create a team of superheroes</a></div>
            <div class="port_out port2 glass"><a href="https://polynesian-sharpene.000webhostapp.com"><img src={project2} className="po1"></img>Game created with javascript vanilla</a></div>
            <div class="port_out port3 glass"><a href="https://github.com/Maxs22/my-app"><img src={project3} className="po1"></img>App to watch movies online</a></div>
            </div>
            )
        }
    }
    
export default Portfolio
    