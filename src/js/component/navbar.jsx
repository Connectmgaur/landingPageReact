import React from "react";


const Navbar=()=>{

return (<ul className="nav justify-content-end navbar-light bg-light">
<li className="nav-item">
  <a className="nav-link active" aria-current="page" href="#">Home</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">About</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Services</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#">Contact </a>
</li>

</ul>
)

};
export default Navbar;