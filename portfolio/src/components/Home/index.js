import React from "react";
import "./style.css";
import "../Images/profilepic.png"

function Home() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-4">
          <img src={require('../Images/profilepic.png')}
            alt=" profilepic" >
          </img>

        </div>

        {/* <div className="jumbotron"> */}
        <div className="jumbotron col-7">
          <h4 className="JumboTitle">Hello, I am </h4>
          <h1 className="header__intro">Najma</h1>
          <br></br>

          <p className="brand">
            I used to be a research scientist before I took career break to raise my family. I love designing and challenges.
            Front End Web Developer allows me to do this.
            Prior to taking this boot camp, I used to do this by using word and powerpoint.
            Have developed skills in JavaScript, CSS ,HTML, responsive web design and UI and UX interface.
            I am loving this so much even at this fast pace. Beside graphics and designing, I love hiking and baking.
          </p>

          {/* <div className="col-2"> 
              <img src={require('../Images/profilepic.png')} 
                alt=" profilepic" >
              </img>
        
          </div> */}
        </div>
      {/* </div> */}


      {/* <div>
          <img src="../Images/profilepic.png"  alt="hello"></img>
           </div> */}


    </div>
     </div>

  );
}




export default Home;