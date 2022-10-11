import React, { useState } from "react";
import '../estilo/bootstrap.min.css';
import Lista from "./Lista";


function Componente2(){
  const [lista, setLista]=useState(null);
  const btnclick= async () =>{
    const api=await fetch("https://rickandmortyapi.com/api/character");
    const characterapi= await api.json();    
    setLista(characterapi.results);   
  }
  const cleanList=()=>{
    setLista(null);
  }
    return(
        <div className="container-fluid">
          <h1>Rick & Morthy API</h1>
          <button type="button" className="btn btn-primary" onClick={btnclick}>Button</button>
          <div>
            
            {lista ? (
              <>
              
              <Lista list={lista} setList={setLista}/>              
              </>
            ): (
              <>
              <h2 className="text-secondary">click para ver listado de personajes</h2>              
              </>
            )}
            
          </div>
         </div>
    );
}
export default Componente2