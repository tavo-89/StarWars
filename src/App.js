import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Planets from './Pages/Planets';
import People from './Pages/People'
import Planet from './Pages/Planet'
import Species from './Pages/Species';
import Vehicles from './Pages/Vehicles';
import Starships from './Pages/Starships';
import Favoritos from './Components/Favoritos';



function App() {
  return (
    <div>
      <Router>

        <Header/>  
        
          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/planets' element={<Planets/>}/>
            <Route path='/people' element={<People/>}/>
            <Route path='/species' element={<Species/>}/>
            <Route path='/vehicles' element={<Vehicles/>}/>
            <Route path='/starships' element={<Starships/>}/>

            <Route path='/favoritos' element={<Favoritos/>}/>
            
            <Route path='planet/:id' element={<Planet/>} />
          </Routes>

      </Router>
    </div>
  );
}

export default App;
