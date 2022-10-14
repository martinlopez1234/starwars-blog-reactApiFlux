import React,{useEffect,useState} from "react";

//create your first component

const Planetas = () => {
  
const [informacion,setInformacion] = useState();

useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://swapi.dev/api/planets/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setInformacion(result)
    })
    .catch(error => console.log('error', error));
    

},[])


	return (

<>

<div className="container">
<h2 className="text-danger mt-3">Planetas</h2>
</div>
<div className="container mt-4">
<div class=" row row-cols-2 row-cols-md-5 g-2">

{informacion && informacion?.results.map((item,index)=>{
  {console.log("name",name)}
return <div class="col" key={index}>
  <div class="card">
  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdvATSPHH4Tt6TJyc4JFtJy0zMwSOj57xpRvOZfLGfuErJXWlIZWLjxbXItN4s1Drt-w&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">Population:{item.population}</p>
      <p class="card-text">Terrain:{item.terrain}</p>
      <button className="btn btn-primary">more info</button>
      <i className="far fa-heart"></i>
    </div>
  </div>
</div>


})

}
</div>
</div>
</>
       
  
    
   
	);
};

export default Planetas;

