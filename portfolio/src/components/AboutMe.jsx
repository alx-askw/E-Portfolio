import "./AboutMe.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

function AboutMe() {



    return (
        <>
            <div className="aboutContainer">
                <h2 className="header">About Me</h2>
                <div className="aboutMeBox">
                    <h3>Welcome to my E-Portfolio!</h3>
                    <h3>My name is Alex</h3>
                    <h3>I am a highly motivated, passionate, and hard-working Software Engineer with an insatiable appetite for constantly learning more. I have a diverse skill set that encompasses test-driven development in Java and JavaScript, to implementing machine learning algorithms in Python. </h3>
                    <h3>My passion for software engineering and the broader STEM field was nurtured during my time at university, where I discovered my innate drive for continuous learning. One of the highlights of my experience in the Digital Futures' Academy was the collaborative environment, where I worked closely with my peers to achieve shared goals within specific time frames.</h3>
                    <div className="links">
                        <h2>Links:</h2>
                        <FontAwesomeIcon icon={faLinkedinIn} /><a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/alexander-askew-bsc/"> LinkedIn</a>
                        <br />
                        <FontAwesomeIcon icon={faGithub} /><a target='_blank' rel='noreferrer' href="https://github.com/alx-askw"> Github</a>
                        {/* <FontAwesomeIcon icon={faLinkedinIn} /><a href=""> E-Portfolio (you're already here :)</a> */}
                    </div>

                </div>

                {/* <div className="links">
                    test
                </div> */}
            </div>
        </>
    )
}

export default AboutMe;
