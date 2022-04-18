import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Main from './components/Home/Main/Main';
import TopBanner from './components/Home/TopBanner/TopBanner';
import Login from './components/Security/Login/Login';
import SignUp from './components/Security/SignUp/SignUp';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Main></Main>}></Route>
       
       <Route path='/' element={<TopBanner></TopBanner>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
     </Routes>
    </div>
  );
}

export default App;