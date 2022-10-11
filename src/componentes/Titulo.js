import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../estilo/bootstrap.min.css';
import { useState, useEffect } from "react";

function Titulo(props) {    
    const {name, msg}=props;
    const [cont, setCont]=useState(0);    
    const [semaforo, setSemaforo]=useState(false);

    useEffect(()=>{console.log(semaforo)},[semaforo]);
    console.log(cont);
    const contar = () => {
        setCont(cont+1);
        setSemaforo(!semaforo);       
    };
    return(
        <div>
        <h1 className='text-primary'>{name}</h1>    
        <p>{msg}</p>
        <h2>{cont}</h2>
        <p className={semaforo ? 'text-danger' : 'text-success'}>color del semaforo {semaforo ? 'rojo' : 'verde'}</p>
        <button type="submit" onClick={contar}>Click</button>
        <button type="submit" onClick={()=>setCont(0)}>Ir  a 0</button>
        
        </div>
    );
    
}
export default Titulo