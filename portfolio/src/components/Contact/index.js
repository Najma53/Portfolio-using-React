import React from 'react';
import "./style.css";


function Contact() {
    return (
        <div className="container-fluid content">
            <h2 clasName="sectionheading" id="contact">Contact</h2>
            <p> Please feel free to contact me</p>
            <div class="row">

    

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <li>
                        <a href="mailto:najma.alibhai@gmail.com">E-mail</a>
                    </li>
                </div>

                <div className="cardContainer col-lg-4 col-md-4 col-sm-12">
                    <li>
                        <a href="https://github.com//Najma53/">GitHub</a>
                    </li>
                </div>
            </div>
            </div>
            );
}

export default Contact;