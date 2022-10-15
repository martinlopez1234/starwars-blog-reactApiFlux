import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
//create your first component

const About = () => {
  
	return (

<>
        
        <h2>welcome to mami about</h2>
        <p>estas en about</p>
    
        <Link to="/Home">regresar a home</Link>
        
    
    </>
	);
};

export default About;