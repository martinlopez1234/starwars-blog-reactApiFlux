import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Nabvar from "../component/Nabvar.jsx";
//create your first component

const PlanetasD = () => {
  const { uid } = useParams()
  console.log(uid);

  const [planetas, setPlanetas] = useState([]);

    useEffect(() => {
    api();
  }, [])
  
  const api = async () => {
    const data = await fetch(`https://swapi.dev/api/planets/${uid}`);
    const users = await data.json();
    setPlanetas(users)
  }
	return (
/* Se agrega Nabvar y contenido de la pagina */
<>
<Nabvar/>
<center><div className="container m-4 d-flex justify-content-center">
<div className="row my-3">
          <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} alt="logo" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 text-center">
              {planetas.name}
            </h1>
            <p className="lead text-center"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ab molestias odio, aperiam fugit corrupti quaerat, velit, provident facilis id omnis inventore ipsam? Consectetur, suscipit? Tenetur assumenda dignissimos ipsa ut?</p>
          </div>
        </div>
    
        </div></center>
        <hr className="container text-danger"></hr>
        <div className="row  ">
        <div className="col-md-2">
            <h5 className="text-center detailColor">Name</h5>
            <p className="text-center detailColor">{planetas.name}</p>
            </div>
            <div className="col-md-2">
            <h5 className="text-center detailColor">Rotation_Period</h5>
            <p className="text-center detailColor">{planetas.rotation_period}</p>
            </div>
            <div className="col-md-2">
            <h5 className="text-center detailColor">Orbital_Period</h5>
            <p className="text-center detailColor">{planetas.orbital_period}</p>
            </div>
            <div className="col-md-2">
            <h5 className="text-center detailColor">Climate</h5>
            <p className="text-center detailColor">{planetas.climate}</p>
            </div>
            <div className="col-md-2">
            <h5 className="text-center detailColor">Gravity</h5>
          
            <p className="text-center detailColor">{planetas.gravity}</p>
            </div>
            <div className="col-md-2">
            <h5 className="text-center detailColor">terrain</h5>
            <p className="text-center detailColor">{planetas.terrain}</p>
            </div>
            
            
         
          
          </div>
        
          
      
    </>
	);
};

export default PlanetasD;
