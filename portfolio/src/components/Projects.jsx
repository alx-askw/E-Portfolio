import './Projects.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faReact, faJs, faPython, faGithub, faJava, faNodeJs, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function Projects({ scrollTo }) {


    const exampleProjects = {
        one: {
            name: "E-Portfolio",
            description: "My E-Portfolio. Written in React, for showing off my projects. It is currently still being worked on and will be evolving over time.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/E-Portfolio'
        },
        two: {
            name: "Music Interface",
            description: "A desktop application made with Electron. The goal of this project is to create a lightweight music player, primarily for music on a users computer (rather than streaming). The twist is that it has hooks for http requests so users can make third party apps",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/music-interface'
        },
        // DFX: {
        //     name: "DFX Clone",
        //     description: "A clone of Digital Future propietry ",
        //     imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
        //     projectLink: 'https://github.com/alx-askw/music-interface'
        // },
        three: {
            name: "Chitter Challenge",
            description: "A full stack clone of Twitter/X using the MERN stack",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/chitterChallenge'
        },
        four: {
            name: "Rock Paper Scissors",
            description: "Challenge set by Digital Futures. A express server for player playing rock paper scissors (and lizard, spock), that incorporates routes.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/rockPaperScissorsChallenge'
        },
        five: {
            name: "News Summary Challenge",
            description: "Challenge set by Digital Futures. A react site that uses Axios to request the latest news from the Guardian API.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/NewsSummaryChallenge'
        },

        six: {
            name: "Scrabble",
            description: "Scrabble scoring logic written in Java",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/Java-Scrabble-Challenge'
        },
        seven: {
            name: "Bank Challenge",
            description: "A challenge set by Digital Futures. With test driven development",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/BankChallenge'
        },
        eight: {
            name: "Airport Challenge",
            description: "A challenge set by Digital Futures. With test driven development",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/airport-challenge'
        },

    }
    const projectArray = Object.values(exampleProjects);

    const icons = {
        1: faReact,
        2: faJs,
        3: faPython,
        4: faGithub,
        5: faJava,
        6: faNodeJs,
        7: faCss3,
        8: faHtml5

    }
    const iconArray = Object.values(icons);



    return (
        <>
            <div>
                <h1 className='title'>Projects</h1>
                <div className='projectsContainer'>
                    <div className='projectsList'>
                        {projectArray.map((project, index) => (
                            <div key={project.name} className='projectItem'>
                                <img src={project.imageLink} alt="" className='proImage' />
                                <a target='_blank' rel='noreferrer' href={project.projectLink} className='proName'>{project.name}</a>
                                <p className='proDesc'>{project.description}</p>
                            </div>
                        ))
                        }</div>
                    <div className='techSkills'>
                        {iconArray.map((icons, index) => (
                            <FontAwesomeIcon className="icons" key={index} icon={icons} />
                        ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects
