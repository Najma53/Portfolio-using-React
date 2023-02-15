import React from "react";
import "./style.css";


// creating a container that would hold data from project.json file
//  Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
// obtained my card template from my previous work in bootstrap portfolio
function Projects(props) {
    return (
        
    //     <div className="cardContainer col-lg-5 col-md-5 col-sm-12">
    //     <div clasNames="card">
    //       <img src={process.env.PUBLIC_URL + props.image} className="card-img-top" alt={props.title}></img>
    //       <div className="card-body">
    //         <h5 className="card-title">{props.title}</h5>
    //         <p className="card-text">{props.description}</p>
    //         <a href={props.deployedLink} class="btn btn-secondary">View the Project</a>
    //         <a href={props.gitHubLink} class="btn btn-secondary">View the Git Hub Repository</a>
    //       </div>
    //     </div>
    //   </div>
    

    // )
// }



<div className="container">
      <div className="row">

        <div className="col-4">
          <img src={process.env.PUBLIC_URL + props.image} className="card-img-top" alt={props.title}>
          </img>

        </div>

        {/* <div className="jumbotron"> */}
        <div className="jumbotron col-7">
          <h5 className="JumboTitle">{props.title}</h5>
          <br></br>

          
          <p className="card-text">{props.description}</p>
            <a href={props.deployedLink} class="btn btn-secondary">View the Project</a>
            <a href={props.gitHubLink} class="btn btn-secondary">View the Git Hub Repository</a>
            </div>
        </div>
      </div>
     )
}
          






export default Projects;