import React from "react";
import '../estilo/bootstrap.min.css';
import { Link } from "react-router-dom";

function Nav_bar(){
  
    return(
        <div>
      <nav className="nav justify-content-center  breadcrumb  w-100 bg-dark border-bottom">
        <Link className="breadcrumb-item nav-link active" to='/Home'>Home</Link>
        <Link className="breadcrumb-item nav-link active" to='/Details'>Details</Link>
        <Link className="breadcrumb-item nav-link active" to='/All'>Characters</Link>
      </nav>
     
     </div>
    );
}
export default Nav_bar