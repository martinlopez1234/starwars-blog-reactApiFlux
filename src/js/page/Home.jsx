import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Nabvar from "../component/Nabvar.jsx";

//create your first component

const Home = () => {
  
const [personajes,setPersonajes] = useState();
const [planetas,setPlanetas] = useState();
const [vehiculos,setVehiculos] = useState();
const [planetas2,setPlanetas2] = useState();
const [personajes2,setPersonajes2] = useState();
const [vehiculos2,setVehiculos2] = useState();

// get Planetas
useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://swapi.tech/api/planets/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setPlanetas(result)
    })
    .catch(error => console.log('error', error));
    
   
    
    fetch("https://swapi.dev/api/planets/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setPlanetas2(result)
      })
      .catch(error => console.log('error', error));
},[])



// get Personajes
useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://swapi.tech/api/people/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setPersonajes(result)
    })
    .catch(error => console.log('error', error));
    
   
    
    fetch("https://swapi.dev/api/people/", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setPersonajes2(result)
      })
      .catch(error => console.log('error', error));

},[])
// get vehiculos
useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.swapi.tech/api/vehicles/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setVehiculos(result)
    })
    .catch(error => console.log('error', error));

    fetch("https://swapi.dev/api/vehicles/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setVehiculos2(result)
    })
    .catch(error => console.log('error', error));
    

},[])


	return (
/*Se llama a nabvar y se llama a los personajes y planetas en los cards */
<>

<Nabvar/>
<div className="container">
<h2 className="text-danger mt-3">Personajes</h2>
</div>
<div className="container mt-4">
<div className=" row row-cols-2 row-cols-md-5 g-2">

{personajes && personajes.results.map((item, index)=>{
  const a =personajes2.results.filter((elem)=>{
    return elem.name == item.name;
    
    }
    
    )
  
return <div className="col">
  <div className="card" key={index} >
  <img  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p>Gender: {a[0].gender}</p>
      <p>Hair Color: {a[0].hair_color}</p>
      <p>Eye-Color: {a[0].eye_color}</p>
     
      <button className="btn btn-outline-primary"><Link to={`PersonajesD/${item.uid}`}>ir about</Link></button>
      <button className="far fa-heart ml-3"></button>
    </div>
  </div>
</div>


})

}
</div>
</div>

<div className="container">
<h2 className="text-danger mt-3">Planetas</h2>
</div>
<div className="container mt-4">
<div className=" row row-cols-2 row-cols-md-5 g-2">

{planetas && planetas?.results.map((item,index)=>{
const a =planetas2.results.filter((elem)=>{
return elem.name == item.name;

}

)

return <div className="col" key={index}>
  <div className="card">
  <img  src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..."/>
    <div className="card-body">
  
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">Population: {a[0].population}</p>
      <p className="card-text">Terrain: {a[0].terrain}</p>
      <button className="btn btn-outline-primary"><Link to={`PlanetasD/${item.uid}`}>ir about</Link></button>
      <button className="far fa-heart ml-3"></button>
    </div>
  </div>
</div>


})

}
</div>
</div>

<div className="container">
<h2 className="text-danger mt-3">Vehiculos</h2>
</div>
<div className="container mt-4">
<div className=" row row-cols-2 row-cols-md-5 g-2">

{vehiculos && vehiculos.results.map((item, index)=>{
  const a =vehiculos2.results.filter((elem)=>{
    return elem.name == item.name;
    
    }
    
    )
  
return <div className="col">
  <div className="card" key={index} >
  <img  src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p>cargo capacity: {a[0].cargo_capacity}</p>
     
     
      <button className="btn btn-outline-primary"><Link to={`VehiculosD/${item.uid}`}>ir about</Link></button>
      <button className="far fa-heart ml-3"></button>
    </div>
  </div>
</div>


})

}
</div>
</div>

 
<footer className="mt-7 p-4 text-center bg-dark text-white" >
    Derechos Reservados© Martin Lopez
        
        </footer>



</>

       
  
    
   
	);
};



export default Home;
