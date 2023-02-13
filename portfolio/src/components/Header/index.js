import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";


function Header() {
    return (
<ul className="nav nav-tabs navbar navbar-expand-lg navbar-light bg-light">
      <li className="nav-item">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
        >        Home
            </NavLink>
        </li>


      <li className="nav-item">
            <NavLink
                to="about"
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
                }
        >       About
            </NavLink>
      </li>

      <li className="nav-item">
            <NavLink
                to="gallery"
                className={({ isActive }) =>
                 isActive ? "nav-link active" : "nav-link"
          }
        >        Gallery
            </NavLink>
      </li>

      <li className="nav-item">
            <NavLink
                to="contact"
                end
                className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
            }
        >   Contact
            </NavLink>
      </li>
    </ul>

    );

    }

export default Header;
