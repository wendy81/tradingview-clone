import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import CoinDetail from './components/CoinDetail';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coins/:id' element={<CoinDetail></CoinDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;