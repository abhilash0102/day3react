import logo from './logo.svg';
import './App.css';
import Login from './componets/Login';
import Registration from './componets/Registration';
import Navbar from './componets/Navbar';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './componets/Statebasics';
import Counter from './componets/Counter';
import UseE from './componets/UseE';
import Viewdata from './componets/Viewdata';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Registration/>}/>
      </Routes>   */}
      {/* <Statebasics/> */}
      {/* <Counter/> */}
      {/* <UseE/> */}
      <Viewdata/>
    </div>
  );
}

export default App;
