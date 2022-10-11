import React,{useEffect,useState} from "react";

//create your first component

const Planetas = () => {
  
const [informacion,setInformacion] = useState();

useEffect(()=>{
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://www.swapi.tech/api/planets/", requestOptions)
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

export default Planetas;
