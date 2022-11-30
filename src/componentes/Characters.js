import React, { useEffect, useState } from "react";
import '../estilo/bootstrap.min.css';
import Lista from "./Lista";


function Characters(){
  const [lista, setLista]=useState(null);
  const btnclick= async () =>{
    const api=await fetch("https://rickandmortyapi.com/api/character");
    const characterapi= await api.json();    
    setLista(characterapi.results);       
  }  
    return(
        <div className="container-fluid">
          <div className="container">
            <img className="bg-dark w-50" src={require("../img/name.png")} alt="Rick & Morty" />
          </div>
          
          <div>            
            {lista ? (
              <>              
              <Lista list={lista} setList={setLista}/>              
              </>
            ): (
              <>
              <button type="button" className="btn btn-primary mt-5 mb-2" onClick={btnclick}>Ver Personajes</button>
              <h5 className="text-secondary">Haga click en el boton azul para ver el listado</h5>              
              </>
            )}
            
          </div>
         </div>
    );
}
export default Characters