import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";



//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<div className="wrapper">
	
	<Jumbotron/>
	
		<div ClassName= "card_container">
		<div className="row">
          <div className="col-md-3">
	< Card 
	img= "https://picsum.photos/200"
	title= "My First Project"
	text="Some quick example text to build on the card title and make up the bulk of the card's content."
	/>
	</div>
	<div className="col-md-3">
	<Card 
	img= "https://picsum.photos/200"
	title= "My Second Project"
	text="Lorem Picsun contebt for the asndjncdsncdc ncldncdn and asmnksdcld askmxsnc nsnsnc ncdlncl."
	/>
	</div>
	<div className="col-md-3">
	<Card
	img= "https://picsum.photos/200"
	title= "My Third Project"
	text="Some quick example text to build on the card title and make up the bulk of the card's content."
	/>
	</div>

	<div className="col-md-3">
	<Card
	img= "https://picsum.photos/200"
	title= "My Fourth Project"
	text="Some quick example text to build on the card title and make up the bulk of the card's content."
	/>
	</div>
	</div>
</div>

</div>
<Footer/>


</>
	);
};

export default Home;
