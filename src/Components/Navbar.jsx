import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const NavbarContainer =()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Ruxsora</Link></li>
                    
                    <li style={{marginLeft:'200px'}}><Link to="/about">About</Link></li>
                    <li><Link to="/about">Skills</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/register">Contacts</Link></li>
                    
                </ul>
            </nav>
        </div>
    )
}

export default NavbarContainer;