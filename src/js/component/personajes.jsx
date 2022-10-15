import React,{useEffect,useState} from "react";


//create your first component

const People = () => {
  
const [informacion,setInformacion] = useState();

useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://swapi.dev/api/people/", requestOptions)
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
<h2 className="text-danger mt-3">Personajes</h2>
</div>
<div className="container mt-4">
<div class=" row row-cols-2 row-cols-md-5 g-2">

{informacion && informacion.results.map((item, index)=>{
  {console.log("name",name)}
return <div class="col">
  <div class="card" key={index} >
  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdvATSPHH4Tt6TJyc4JFtJy0zMwSOj57xpRvOZfLGfuErJXWlIZWLjxbXItN4s1Drt-w&usqp=CAU" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-text">Gender: {item.gender}</p>
      <p class="card-text">Hair Color: {item.hair_color}</p>
      <p class="card-text">Eye-Color: {item.eye_color}</p>
      <button className="btn btn-outline-primary">mami</button>
      <button className="far fa-heart ml-3"></button>
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



export default People;
