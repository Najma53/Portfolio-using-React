import React from "react";
import "./style.css";
import projects from "./project.json";
import Projects from "../Projects";


function Gallery () {
    return (
      <div className="container-fluid">
      <div ClassName="row">
      <div className="col-10">
      <h3>My Work</h3>
      <p>These are the few projects I did when I joined Trilogy bootcamp. The camp was 16 weeks long and
        I have learnt a lot from it, from someone who could not code to building a REACt APP, pretty impressive.
      </p>
      </div>
 
      {projects.map(project => (
          <Projects
            key={project.id}
            title={project.title}
            description={project.description}
            deployedLink={project.deployedLink}
            gitHubLink={project.gitHubLink}
            image={project.image}

          />
        
      ))}  
      </div>   
       </div> 
     
  );
}

export default Gallery;
      

    // https://reactjs.org/docs/lists-and-keys.html