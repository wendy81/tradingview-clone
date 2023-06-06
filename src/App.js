import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import CoinDetail from './components/CoinDetail';

function App() {
  return (
    <div>
      <Nav></Nav>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/coins/:id' element={<CoinDetail></CoinDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;