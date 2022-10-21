import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//create your first component

const VehiculosD = () => {
  const { uid } = useParams()
  console.log(uid);

  const [vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
    api();
  }, [])
  
  const api = async () => {
    const data = await fetch(`https://swapi.dev/api/vehicles/${uid}`);
    const users = await data.json();
    setVehiculos(users)
  }
	return (
/* Se agrega Nabvar y contenido de la pagina */
<>
<nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="container">
        <a class="navbar-brand" href="/"><img width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
</div>
</nav>
<center><div className="container m-4 d-flex justify-content-center">
<div className="row my-3">
          <div className="col-md-4">
            <img src="http://via.placeholder.com/450x300" alt="logo" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 text-center">
              {vehiculos.name}
            </h1>
            <p className="lead text-center"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ab molestias odio, aperiam fugit corrupti quaerat, velit, provident facilis id omnis inventore ipsam? Consectetur, suscipit? Tenetur assumenda dignissimos ipsa ut?</p>
          </div>
        </div>
    
        </div></center>
        <hr className="container text-danger"></hr>
        <div className="row  ">
        <div className="col-md-2">
            <h5 className="text-center detailColor">Name</h5>
            <p className="text-center detailColor">{vehiculos.name}</p>
          </div>
        
          </div>
      
    </>
	);
};

export default VehiculosD;
