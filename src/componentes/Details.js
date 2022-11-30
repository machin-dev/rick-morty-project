import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../estilo/bootstrap.min.css';
import { useState, useEffect } from "react";

function Details(props) {    
   
    return(
        <div className="container-fluid d-flex flex-column text-light mt-5 justify-content-center ">
         <p> <b><u>Fecha de lanzamiento: </u></b> 25 de octubre de 2014 (España)</p>
         <p> <b><u>Pais de origen:</u></b>Estados Unidos</p>
         <p> <b><u>Sitio Oficial:</u></b><a href="https://www.facebook.com/RickandMorty"> Official Facebook</a></p>
        </div>
    );
    
}
export default Details