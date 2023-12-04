import './Projects.css'
// import ProjectBox from './ProjectsPageComponents/ProjectBox';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Projects({ scrollTo }) {


    const exampleProjects = {
        one: {
            name: "E-Portfolio",
            description: "My E-Portfolio. Written in React, for showing off my projects. It is currently still being worked on and will be evolving over time.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
            projectLink: 'https://github.com/alx-askw/E-Portfolio'
        },
        two: {
            name: "Project 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
        },
        three: {
            name: "Project 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
        },
        four: {
            name: "Project 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
        },
        five: {
            name: "Project 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
        },

    }
    const projectArray = Object.values(exampleProjects);


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
                    <div className='techSkills'>test2</div>
                </div>
            </div>
        </>
    )
}

export default Projects
