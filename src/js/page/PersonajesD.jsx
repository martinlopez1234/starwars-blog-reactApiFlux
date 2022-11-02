import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//create your first component

const About = () => {
  const { uid } = useParams()
  console.log(uid);

  const [personaje, setPersonaje] = useState([]);

    useEffect(() => {
    api();
  }, [])
  
  const api = async () => {
    const data = await fetch(`https://swapi.dev/api/people/${uid}`);
    const users = await data.json();
    setPersonaje(users)
  }
	return (
/* Se agrega Nabvar y contenido de la pagina */
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <a className="navbar-brand" href="/"><img width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites 0
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
<center><div className="container m-4 d-flex justify-content-center">
<div className="row my-3">
          <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt="logo" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 text-center">
              {personaje.name}
            </h1>
            <p className="lead text-center"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ab molestias odio, aperiam fugit corrupti quaerat, velit, provident facilis id omnis inventore ipsam? Consectetur, suscipit? Tenetur assumenda dignissimos ipsa ut?</p>
          </div>
        </div>
    
        </div></center>
        <hr className="container text-danger"></hr>
        <div className="row  ">
        <div className="col-md-2">
            <h5 className="text-center detailColor">Name</h5>
            <p className="text-center detailColor">{personaje.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Birth Year</h5>
            <p className="text-center detailColor">{personaje.birth_year}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Gender</h5>
            <p className="text-center detailColor">{personaje.gender}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Height</h5>
            <p className="text-center detailColor">{personaje.height}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Skin Color</h5>
            <p className="text-center detailColor">{personaje.skin_color}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Eye Color</h5>
            <p className="text-center detailColor">{personaje.eye_color}</p>
          </div>
          </div>
    </>
	);
};

export default About;
