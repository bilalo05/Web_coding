import {MOCK_PROJECTS} from "./MockProjects";
import React from "react";

const ProjectsPage =() => {
    
    return(
        <>
            
{/*
                {JSON.stringify(MOCK_PROJECTS, null, ' ')}
*/}
            <div className="container ">
                
                <div className="row flex-container">
                    {MOCK_PROJECTS.map((project) => (
                        <div key={project.id} className="col-md-4 col-sm-12 col-lg-3 flex-container">
                            <div className="card">
                                <img src={project.imageUrl} className="card-img-top" alt={project.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <p>Contract Signed On: {new Date(project.contractSignedOn).toLocaleDateString()}</p>
                                    <p>Budget: {project.budget}</p>
                                    <p>Active: {project.isActive ? 'Yes' : 'No'}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;