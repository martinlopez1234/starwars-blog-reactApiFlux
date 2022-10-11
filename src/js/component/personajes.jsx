import React,{useEffect,useState} from "react";

//create your first component

const People = () => {
  
const [informacion,setInformacion] = useState();

useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.swapi.tech/api/people/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setInformacion(result)
    })
    .catch(error => console.log('error', error));
    

},[])


	return (

<>
<nav class="navbar navbar-expand-lg navbar-dark bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"><img width="100px" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png"/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
</div>
</nav>
<div className="container">
<h2 className="text-danger mt-3">Personajes</h2>
</div>
{informacion && informacion?.results.map(({name})=>{
  {console.log("name",name)}
return <div className="container"><div className="row mt-4">
<div class="col-lg-3 mb-4 text-center ">
<div class="card" >
<img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdvATSPHH4Tt6TJyc4JFtJy0zMwSOj57xpRvOZfLGfuErJXWlIZWLjxbXItN4s1Drt-w&usqp=CAU" class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title text-center">{name}</h5>
<p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Find Out More!</a>
</div>
</div>
</div>


</div>
</div>
})

}
</>
       
  
    
   
	);
};

export default People;
