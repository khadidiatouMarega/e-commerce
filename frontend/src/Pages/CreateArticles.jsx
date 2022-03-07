import styled from "styled-components";
import { categories } from "./Data";
import CategoriesItem from "../Components/CategoriesItem";
import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar";
import Annonce from "../Components/Annonce";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container1 = styled.div`
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff7f7;
`;
const Wrapper = styled.div`
  width: 21%;
  height: 245px;
  padding: 20px;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 90%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 5px 20px;
  cursor: pointer;
  color: white;
  width: 160px;
  margin: 20px 10px 0px 0px;
`;

const CreateArticles = () => {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleName = (e) => {
        setName(e.target.value);
      };
      const handlePrice = (e) => {
        setPrice(e.target.value);
      };
      const handleDesc = (e) => {
        setDescription(e.target.value);
      };
    //   const handlePhoto = (e) => {
    //     setPhoto(e.target.files);
    //     console.log(e.target.files);
    //   };
      const onSubmit = (event) =>{
        event.preventDefault()  

        let url = '/api/article/create'
        let tmp = {"name":name, "price":price, "description": description};
        let _object = JSON.stringify(tmp);
        console.log(_object);
        fetch(url, { method: "POST", body:_object})
        // .then(res => res.json())
        .then((res) => {
          console.log(res);
          console.log(_object);
          alert('Article crée avec succés !');
        })
      }

  return <Container1>
  <Annonce/>
   <Navbar/>
   <Container>
    <Wrapper>
    <Title>Créer un article</Title>
      <Form onSubmit={onSubmit}>
          <Input type='text' name="name" placeholder="name" value={name} onChange={handleName}></Input>
          <Input type="text" name="description" placeholder="description" value={description} onChange={handleDesc}></Input>
          <Input type='text' name="price" placeholder="prix" value={price} onChange={handlePrice}></Input>
          {/* <Input type="file" name="photo" placeholder="image" value={photo} onChange={handlePhoto}></Input> */}
          <Button type="submit">Créer</Button>
        </Form>
        </Wrapper>
  </Container>
<Newsletter/>
<Footer/>
  </Container1>
};

export default CreateArticles;
