import React from "react";


const Navbar=()=>{

return (<ul className="nav justify-content-end navbar- bg-dark text-white">
  
  
  <span className="navbar-brand" style= {{textAlign: "left corner"}}> Start Bootstrap </span>
  

<li className="nav-item ">
  
  <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
</li>
<li className="nav-item ">
  <a className="nav-link text-white" href="#">About</a>
</li>
<li className="nav-item">
  <a className="nav-link text-white" href="#">Services</a>
</li>
<li className="nav-item">
  <a className="nav-link text-white" href="#">Contact </a>
</li>

</ul>
)

};
export default Navbar;