import './App.css';
import './estilo/bootstrap.min.css';
import Titulo from './componentes/Titulo';
import Componente2 from './componentes/Componente2';
import Home from './Home';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import Nav_bar from './componentes/Nav_bar';

function App() {
  return (
    <div className="App min-vh-100 bg-dark">
      <header>            
       <Router>
        <Nav_bar />               
         <Routes>          
          <Route path='/Titulo' element={<Titulo name='Michel' msg='aslkdj alskjdad' />} />
          <Route path='/Componente2' element={<Componente2 />} />  
          <Route path='/Home' element={<Home />}/>        
          <Route path='/' element={<Home />}/> 
         </Routes>
        </Router>      
          
      </header>
    </div>
  );
}

export default App;
