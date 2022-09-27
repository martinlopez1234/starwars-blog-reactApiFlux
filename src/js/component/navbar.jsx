import React from "react";

//create your first component
const Navbar = () => {
	return (

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
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
</div>
</nav>
       
  
    
   
	);
};

export default Navbar;
