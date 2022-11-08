
import React,{useEffect,useState,useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
//create your first component

const Nabvar = () => {
  const { store, actions } = useContext(Context);
  var p = "PersonajesD";
  var a = "PlanetasD";
	return (

<>

<nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container">
      <Link to={`/`}> <img width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="btn-group">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites {store.favorites.length + store.favoritess.length}
  </button>
  <ul className="dropdown-menu">
  
  {store.favorites.map((item,index)=>{
  return (
    <li  key={index}>
      <Link to={`${p}/${item.uid}`}>{item.name}</Link>
      
      <i className="eliminar " onClick={() => {
                        actions.deleteFavorites(index);
                      }} ><img className="float-end" width="20px" src="https://cdn-icons-png.flaticon.com/512/565/565491.png"/></i>
    </li>

  );
})}

{store.favoritess.map((i,index)=>{
  return (
    <li  key={index}>
      <Link to={`${a}/${i.uid}`}>{i.name}</Link>
      
      <i className="eliminar " onClick={() => {
                        actions.deleteFavorites(index);
                      }} ><img className="float-end" width="20px" src="https://cdn-icons-png.flaticon.com/512/565/565491.png"/></i>
    </li>

  );
})}

  
  </ul>
</div>
</div>
</nav>



</>
	);
};

export default Nabvar;

