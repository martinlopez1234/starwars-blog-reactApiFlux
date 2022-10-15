//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


import App from "./App.js";

import { BrowserRouter } from "react-router-dom";

import Nabvar from "./component/Nabvar.jsx";
//render your react application
const Pagina = () => {
    //here you have to return expected html using the properties being passed to the component
    return (
        <>
       <BrowserRouter>
        <Nabvar/>
        
       <App/>
        
        
        </BrowserRouter>
        </>
        
    );
};



ReactDOM.render(<Pagina/>, document.querySelector("body"));


