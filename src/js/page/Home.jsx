import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import Nabvar from "../component/Nabvar.jsx";

//create your first component

const Home = () => {
  
const [personajes,setPersonajes] = useState();
const [planetas,setPlanetas] = useState();
const [vehiculos,setVehiculos] = useState();



// get Planetas
useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  // get planetas
  fetch("https://swapi.tech/api/planets/", requestOptions)
    .then(response => response.json())
    .then(result => {
     
      setPlanetas(result)
    })
    
    
    .catch(error => console.log('error', error));
      // get personajes
      fetch("https://swapi.tech/api/people/", requestOptions)
      .then(response => response.json())
      .then(result => {
    
        setPersonajes(result)
      })
      .catch(error => console.log('error', error));

      fetch("https://swapi.dev/api/people/", requestOptions)
      .then(response => response.json())
      .then(result => {
    
        setPersonajes2(result)
      })
      .catch(error => console.log('error', error));
      
     
    
    
    

        // get vehiculos
        fetch("https://www.swapi.tech/api/vehicles/", requestOptions)
        .then(response => response.json())
        .then(result => {
          
          setVehiculos(result)
        })
      
        .catch(error => console.log('error', error));

       
    
        
},[])

// get Planetas







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
  

  
return <div className="col" key={index}>
  <div className="card" key={index} >
  <img  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
    
    
     
     
      <button className="btn btn-outline-primary"><Link to={`PersonajesD/${item.uid}`}>ir about</Link></button>
      <button onClick={() => alert(item.name)} className="btn btn-outline-warning float-end far fa-heart ml-3"></button>
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
 

return <div className="col" key={index}>
  <div className="card">
  <img  src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top" alt="..."/>
    <div className="card-body">
  
      <h5 className="card-title">{item.name}</h5>
    
    
    
      <button className="btn btn-outline-primary"><Link to={`PlanetasD/${item.uid}`}>ir about</Link></button>
      <button className="btn btn-outline-warning float-end far fa-heart ml-3"></button>
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

 
  
return <div className="col" key={index}>
  <div className="card" key={index} >
  <img  src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
     
   
    
      
     
     
      <button className="btn btn-outline-primary"><Link to={`VehiculosD/${item.uid}`}>ir about</Link></button>
      <button className="btn btn-outline-warning float-end far fa-heart ml-3"></button>
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
