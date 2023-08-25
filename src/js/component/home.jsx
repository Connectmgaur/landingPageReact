import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";


//create your first component
const Home = () => {
	return (
	<> 
	<Navbar/>
	
	<Jumbotron/>
	
		<div ClassName= "container">
		<div className="row">
          <div className="col-md-3">
	< Card />
	</div>
	<div className="col-md-3">
	<Card />
	</div>

	<div className="col-md-3">
	<Card/>
	</div>

	<div className="col-md-3">
	<Card/>
	</div>
	</div>
</div>
</>

	);
};

export default Home;
