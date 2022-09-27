import React from "react";

//include images into your bundle


//create your first component
const Header = () => {
	return (
		
		<>
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-2 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo sit quis sapiente officia vero non iste expedita reprehenderit doloribus nemo dolorem exercitationem praesentium officiis, quibusdam eveniet quos molestiae temporibus?</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    	</div>
		</>
	);
};

export default Header;
