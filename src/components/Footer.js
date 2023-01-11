import React from "react";
import icon from "../img/favicon1.ico"
import linkedin from "../img/linkedin.png"


const Footer = () => {
  return(
 
    <footer className="footer">
      <div className="text-center mb-5">
    <a href="https://github.com/afredknot"><img className="toilet"src={icon}></img></a>
    <a href="https://www.linkedin.com/in/daniel-nelson-3440b5b1/"><img className="toilet" src={linkedin}>
    </img></a>
    </div>
  </footer>

)
}
export default Footer;