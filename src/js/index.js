//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Header from "./component/Header.jsx";
import Navbar from "./component/navbar.jsx";
import Cards from "./component/Cards.jsx";
import Footer from "./component/footer.jsx";

//render your react application
const Pagina = () => {
    //here you have to return expected html using the properties being passed to the component
    return (
        <>
        <Navbar/>
        
        <div className="container">
        <Header/>
        <Cards/>
        

        </div>
        <Footer/>
        </>
        
    );
};



ReactDOM.render(<Pagina/>, document.querySelector("body"));



