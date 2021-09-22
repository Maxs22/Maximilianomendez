import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Maximiliano <mark className="mark2">Mendez</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10">I started my journey in the world of computers from an early age, I am now 28 years old,
                                pursuing my degree in Information Technology Analyst
                                and Communication. Web development is my center of interest, 
                                I have always liked the idea of ​​multiplatform development, what web technology like Javascript allows me to do. 
                                I also like creating interactive UI components for better UX.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>Universidad Nacional de La Plata</h4>
            <p className="p1">Analista en Tecnologías de la Información <br/>y la Comunicación</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Sep 2021 - 2024</p>
            <h4>Secundaria</h4>
            <p className="p1">Naciones Unidas</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>diciembre 2012</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">Jira</div>
            <div class="sk s7 glass">Git</div>

            </div>
            )
        }
    }
    
export default About
    