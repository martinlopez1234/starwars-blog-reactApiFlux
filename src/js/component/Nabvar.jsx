
import React,{useEffect,useState} from "react";

//create your first component

const Nabvar = () => {
  
	return (

<>

<nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <a className="navbar-brand" href="#"><img width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
</div>
</nav>



</>
	);
};

export default Nabvar;

