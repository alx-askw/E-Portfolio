import './ProjectBox.css';

function ProjectBox() {



    return (
        <>
            <div className='projectList  bg-gray-800'>
                <h4>Projects - </h4>
                {projectArray.map((project, index) => (
                    // todo; change key to a UUID
                    <ProjectContainer key={project.name} project={project} index={index} />
                ))
                }
            </div>
        </>
    )
}

export default ProjectBox
