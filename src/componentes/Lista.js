export default function Lista(props){
    const {list,setList}=props;   
    const reset= ()=>{
        console.log('resetando');
        setList("");
    } 
    return(
        <div className="container-fluid">
           <h3 className="text-light">Listado de personajes</h3> 
           <span className="text-primary text-decoration-underline " onClick={reset}>
            <button className="btn btn-secondary m-3" href="#">Atras</button>
           </span>
           <div className="container-fluid">
            {console.log(list)}
            {list.map((l,index)=>(
                
                <div className="card d-inline-flex m-2 border b-2" max-width={50} key={index}>
                    <img src={l.image} title={l.name} alt="" />
                    <div className="card-header">
                        <p className="card-text fw-bold p-1 position-relative">
                            Nombre: {l.name}
                             <span className="badge bg-secondary position-absolute top-0 start-75 translate-middle ">{l.species}</span>
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
                        
                    </div>    
                </div>   
               
            ))} 
          </div>
        </div>
    );
}