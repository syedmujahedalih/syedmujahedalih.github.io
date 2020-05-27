import React, { Component } from 'react';
import Social from '../components/Social';

class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <br></br>
            <p>
                Hey there! My name is Mujahed Syed. I'm currently a graduate student at Arizona State University, Tempe. I'm pursuing my MS
                in Computer Engineering (Computer Systems). Prior to joining ASU, I completed my Bachelor of Technology (B.Tech) from Manipal University
                Jaipur, India. During my undergrad I've interned at Deloitte and Ericsson. My areas of interest include Data Science and Analytics, Machine 
                Learning and Data Visualization. I'm currently in the job hunting phase and I'm open to Software Development, Business Intelligence, Analytics and 
                Data Science related job roles.
            </p>
            <Social />
            </div>
            )
        }
    }
    
export default About
    