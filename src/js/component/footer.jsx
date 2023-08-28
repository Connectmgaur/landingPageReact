import React from "react";


const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer className="footer">{`Copyright © Your Website ${year}`}</footer>;
    
  };
  
  export default Footer;