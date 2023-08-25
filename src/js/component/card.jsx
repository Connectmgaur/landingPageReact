import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";

const Card=(props)=>{

    return( <div className="card" style={{ color: 'black'}}>
    <img src= {props.img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-description">{props.text}</p>
      <a href="#" className="btn btn-primary">Find Out More</a>
    </div>
  </div>

    )
};
export default Card;

