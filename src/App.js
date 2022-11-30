import './App.css';
import './estilo/bootstrap.min.css';
import Titulo from './componentes/Details';
import Componente2 from './componentes/Characters';
import Home from './Home';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import Nav_bar from './componentes/Nav_bar';
import Details from './componentes/Details';
import Characters from './componentes/Characters';

function App() {
  return (
    <div className="App min-vh-100 bg-dark">
      <header>            
       <Router>
        <Nav_bar />               
         <Routes>          
          <Route path='/Details' element={<Details />} />
          <Route path='/All' element={<Characters />} />  
          <Route path='/Home' element={<Home />}/>        
          <Route path='/' element={<Home />}/> 
         </Routes>
        </Router>      
          
      </header>
    </div>
  );
}

export default App;
