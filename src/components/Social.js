import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub,
    faLinkedin,
    faHackerrank
  } from "@fortawesome/free-brands-svg-icons";

class Social extends Component {
    render() {
        return (
            <div className="social">
            <a href="https://github.com/syedmujahedalih" className="github"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="https://www.linkedin.com/in/syed-mujahed/"className="linkedin"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://twitter.com/syedmujahedalih" className="twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            <a href="https://www.hackerrank.com/syedmujahedalih1" className="hackerrank"><FontAwesomeIcon icon={faHackerrank} size="2x" /></a>
            </div>
            )
        }
    }
    
export default Social