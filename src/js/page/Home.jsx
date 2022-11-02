import React,{useEffect,useState, useContext} from "react";
import { Link } from "react-router-dom";
import Nabvar from "../component/Nabvar.jsx";
import { Context } from "../store/appContext.js";

//create your first component

const Home = () => {
const {store, actions} = useContext(Context);
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
<nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
        <a className="navbar-brand" href="#"><img width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites {store.favorites.length}
  </button>
  <ul className="dropdown-menu">
  {store.favorites.map((item, index)=>{
  return (
    <li key={index} >
      {item}
      <i className="eliminar " ><img className="float-end" width="20px" src="https://cdn-icons-png.flaticon.com/512/565/565491.png"/></i>
    </li>

  );
})}
  
  </ul>
</div>
</div>
</nav>




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
    
    
     
     
      <button className="btn btn-outline-primary"><Link to={`PersonajesD/${item.uid}`}>Learn more!</Link></button>
      <button onClick={() => actions.setFavorites(item.name)} className="btn btn-outline-warning float-end far fa-heart ml-3"></button>
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
    
    
    
      <button className="btn btn-outline-primary"><Link to={`PlanetasD/${item.uid}`}>Learn more!</Link></button>
      <button onClick={() => actions.setFavorites(item.name)} className="btn btn-outline-warning float-end far fa-heart ml-3"></button>
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
     
   
    
      
     
     
      <button className="btn btn-outline-primary"><Link to={`VehiculosD/${item.uid}`}>Learn more!</Link></button>
      <button onClick={() => actions.setFavorites(item.name)} className="btn btn-outline-warning float-end far fa-heart ml-3"></button>
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
