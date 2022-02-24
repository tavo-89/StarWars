import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Planets from './Pages/Planets';
import People from './Pages/People'
import Planet from './Pages/Planet'





function App() {
  return (
    <div>
      <Router>
        <Header/>
        
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/planetas' element={<Planets/>}/>
            <Route path='planeta/:id' element={<Planet/>} />
            <Route path='/personajes' element={<People/>}
            />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
