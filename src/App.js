import './App.css';
import './estilo/bootstrap.min.css';
import Titulo from './componentes/Titulo';
import Componente2 from './componentes/Componente2';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import Nav_bar from './componentes/Nav_bar';

function App() {
  return (
    <div className="App">
      <header>            
       <Router>
        <Nav_bar />   
          <h1 className="display-1">Heading</h1>    
         <Routes>
          <Route path="/"/>
          <Route path='/Titulo' element={<Titulo name='Michel' msg='aslkdj alskjdad' />} />
          <Route path='/Componente2' element={<Componente2 />} />          
         </Routes>
        </Router>      
          
      </header>
    </div>
  );
}

export default App;
