import React from "react";

//create your first component
const Navbar = () => {
	return (
<div className="navbar-colaborativo">
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a className="navbar-brand " href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
        <ul className="navbar-nav ">
            <li className="nav-item active">
            <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Service</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Portafolio</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
</div>
    
   
	);
};

export default Navbar;
