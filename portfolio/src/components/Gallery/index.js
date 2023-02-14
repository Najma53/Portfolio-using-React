import React from "react";
import "./style.css";
import projects from "./projects.json";
import Projects from Projects;


function Gallery () {
    return (
        <div>
      <div className="row">
      <h1>Gallery</h1>
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
  );
}

export default Gallery;
      

    // https://reactjs.org/docs/lists-and-keys.html