//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import People from "./component/personajes.jsx";
import Planetas from "./component/Planetas.jsx";

import Nabvar from "./component/Nabvar.jsx";
//render your react application
const Pagina = () => {
    //here you have to return expected html using the properties being passed to the component
    return (
        <>
        <Nabvar/>
        <People/>
        <Planetas/>
        </>
        
    );
};



ReactDOM.render(<Pagina/>, document.querySelector("body"));


