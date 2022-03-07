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
