import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./page/Home.jsx";
import PersonajesD from "./page/PersonajesD.jsx";
import PlanetasD from "./page/PlanetasD.jsx";
import VehiculosD from "./page/VehiculosD.jsx";
import injectContext from "./store/appContext.js";

const App = () => {
  
	return (

<>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="PersonajesD/:uid" element={<PersonajesD/>} />
<Route path="PlanetasD/:uid" element={<PlanetasD/>} />
<Route path="VehiculosD/:uid" element={<VehiculosD/>} />
</Routes>




</>
	);
};

  

export default injectContext(App);

