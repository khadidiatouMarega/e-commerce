import React from 'react'
import Annonce from '../../Components/Annonce';
import Categories from '../../Components/Categories';
import Navbar from '../../Components/Navbar';
import Slider from '../../Components/Slider';
import Newsletter from '../../Components/Newsletter';
import Footer from '../../Components/Footer';
import styled from "styled-components";

const Container = styled.div`
`;

const Home = () => {
    return (
        <Container>
            <Annonce/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Home



//  Routes.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styled from 'styled-components';
// import Register from "./Pages/Register";
// import Login from "./Pages/Login";
// import Home from './Pages/Home/Home';


// const Container = styled.div`
// `;

// const LesRoutes = () => {
//   return (
//       <Container>
//         <Router>
//         <Routes>
//           <Route path="/" component={Home}/>
//           <Route path="/register" component={Register}/>
//           <Route path="/login" component={Login}/>
//         </Routes>
//          </Router>
//       </Container>
//   );
// };

// export default LesRoutes;