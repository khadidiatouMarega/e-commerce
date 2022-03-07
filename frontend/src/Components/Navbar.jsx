import React from 'react';
import styled from 'styled-components';
import {Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link, BrowserRouter as Router} from "react-router-dom";
import Sweat from "../Assets/eco.png";


const Container = styled.div`
  height: 60px;
  background-color: #f5fafd;
`
const Image = styled.img`
margin-right: 5px;
`;
const SearchContainer =  styled.div`
  border: 0.5px solid lightgray;
  align-items: center;
  display: flex;
  margin-left: 25px;
  padding: 5px;
  border-radius: 20px;
`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
`
const Left = styled.div`
  width: 33.3%;
  flex: 1;
  align-items: center;
  display: flex;
  `
const Center = styled.div` 
  width: 33.3%;
  flex: 1;
  text-align: ceenter;
  `
const Right = styled.div`
width: 33.3%;
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const Langage = styled.span`
font-size: 14px;
cursor: pointer;

`
const Input = styled.input`
border: none;
background-color: #f5fafd;
`
const Logo = styled.h1`
font-weight: bold;
font-family: cursive;
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px
`
// const Link = styled.div`
// font-size: 14px;
// cursor: pointer;
// margin-left: 25px
// `
const Navbar = () => {
  return (
      <Container>
        <Wrapper>
        <Left>
          <Langage>FR</Langage>
          <SearchContainer>
            <Input/>
            <Search style={{ color:"gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
          <Image src={Sweat} />ShopHere.</Logo>
        </Center>
     <Right>
          <Link className='link' to="/register">Inscription</Link>
          <Link className='link' to="/login">Connexion</Link>
          <Link className='link' to="/collections">Collections</Link>
          <Link className='link2 ' to="/cart">Panier</Link>
            <ShoppingCartOutlined/>
    </Right>
        </Wrapper>
      </Container>
  )
}

export default Navbar
