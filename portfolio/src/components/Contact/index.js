import React from 'react';
import "./style.css";


function Contact() {
    return (
        <div className="container-fluid content">
            <h2 clasName="sectionheading" id="contact">Contact</h2>
            <p> Please feel free to contact me</p>
            <div class="row">

    

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <div className="col-4">
                        <a href="mailto:najma.alibhai@gmail.com"><img src={process.env.PUBLIC_URL + "/image/email.png"}></img></a>
                    </div>
                </div>

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <div className="col-4">
                        <a href="https://github.com//Najma53/"><img src={process.env.PUBLIC_URL + "/image/github.png"}></img></a>
                    </div>
                </div>

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <div className="col-4">
                        <a href="www.linkedin.com/in/najma53"><img src={process.env.PUBLIC_URL + "/image/linkedin.png"}></img></a>
                    </div>
                </div>
            </div>
            </div>
            );
}

export default Contact;