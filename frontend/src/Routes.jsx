import './App.css';
import Home from './Pages/Home/Home';
import Register from '../src/Pages/Register';
import Login from '../src/Pages/Login';
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Produits from './Components/Produits';
import Cart from './Pages/Cart';
import CreateArticles from "../src/Pages/CreateArticles";

const Container = styled.div``;

const LesRoutes = () => {
  return (
    <Container>
      <Router>
            <Routes>
             <Route exact path="/"  element={<Home/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/collections" element={<Produits/>}/>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="/create" element={<CreateArticles/>}/>
            </Routes>
      </Router>
    </Container>
  );
}

export default LesRoutes;
