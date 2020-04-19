import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/syed_dp.jpg';

class Home extends Component {
    render() {
    return (
    <div className="condiv Home">
    <img src={profilepic} alt='profilepic' className="profilepic"></img>
    <ReactTypingEffect className="typingeffect" text={['Hey there! I am Mujahed Syed.','I am a graduate student @ Arizona State University.']} 
    speed={88} eraseDelay={600}/>
    </div>
    )
    }
    }
    export default Home