import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./page/Home.jsx";
import About from "./page/PersonajesD.jsx";

const App = () => {
  
	return (

<>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="About" element={<About/>} />


</Routes>




</>
	);
};

  

export default App;
