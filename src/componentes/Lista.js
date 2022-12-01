import { useEffect, useState } from "react";

export default function Lista(props){    
    const {list,setList}=props; 
    const [filter, SetFilter]=useState(null);
      
    const reset= ()=>{
        console.log('resetando');
        setList("");
        SetFilter(null);
    }   
     
    useEffect(()=>(console.log(filter)))
    return(
        <div className="container-fluid text-light">
           <h3 className="text-light">Listado de personajes</h3> 
           <span className="text-primary text-decoration-underline " onClick={reset}>
            <button className="btn btn-secondary m-3" href="#">Atras</button>
           </span>
           <label className="d-inline-flex align-items-center justify-content-center">Filtrar especie:
           <select className="m-2" onChange={(e)=>(SetFilter(e.target.value))}>    
             <option name='' value=''></option>         
             <option name='human' value='Human'>Human</option>
             <option name='allien' value='Alien'>Alien</option>             
           </select>
           <p className="text-secondary">{filter ? (
                 <>{filter}</>
           ):(
            <>Todos los personajes</>
           )}</p>
           </label>
           <div className="container-fluid">            
            {list.map((l,index)=>(   
                <>
                {l.species===filter || !filter ? (                    
                    <div className="card d-inline-flex m-2 border b-2 bg-dark" max-width={50} key={index}>
                    <img src={l.image} title={l.name} alt="" />
                    <div className="card-header">
                        <p className="card-text fw-bold p-1 position-relative">
                            Nombre: {l.name}                             
                        </p>
                        {
                            l.status==='Alive' ?
                            (
                                <>
                                <p className="fw-bold text-decoration-underline">
                                    Status:<span className="text-success">
                                             {l.status}
                                           </span>
                                </p>
                                </>
                            ):
                            (
                                <>
                                 <p className="tw-bold text-decoration-underline">
                                    Status:<span className="text-secondary">
                                             {l.status}
                                           </span>
                                </p>
                                </>
                            )
                        }
                        <p className="">Episodes:  
                             <span className="badge bg-danger">
                              {l.episode.length}                               
                            </span>
                        </p>
                        <span className="badge bg-dark position-absolute top-0 end-0 rounded-pill">{l.species}</span>
                    </div>    
                </div>
                ):(
                     console.log('not '+ filter)
                )}
                
                </>        
                    ))} 
            
          </div>
        </div>
    );
}