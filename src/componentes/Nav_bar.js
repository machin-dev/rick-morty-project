import React from "react";
import '../estilo/bootstrap.min.css';
import { Link } from "react-router-dom";

function Nav_bar(){
  
    return(
        <div>
      <nav className="nav justify-content-center  breadcrumb">
        <Link className="breadcrumb-item nav-link active" to='/'>Home</Link>
        <Link className="breadcrumb-item nav-link active" to='/Titulo'>Titulo</Link>
        <Link className="breadcrumb-item nav-link active" to='/Componente2'>Componente 2</Link>
      </nav>
     
     </div>
    );
}
export default Nav_bar