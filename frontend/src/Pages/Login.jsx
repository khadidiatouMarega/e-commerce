import styled from "styled-components";
import Annonce from "../Components/Annonce";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import React, { useState } from 'react';

// import Storage from "../outils/Storage";

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
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 5px;
  cursor: pointer;
  width: 40%;
  margin-bottom: 10px;
  color: white;
`;

const Link = styled.a`
text-decoration: underline;
margin: 5px 0px;
font-size: 12px;
cursor:pointer;
`;



const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const onSubmit = (event) =>{
    event.preventDefault()  

    let url = '/api/login'
    let tmp = {"email":email, "password":password};
    let _object = JSON.stringify(tmp);

    function HandleResponse(){
      window.location.href = "/"
    }
    
    function HandleError(){
      alert('Echec de votre connexion!')
    }
    fetch(url, { method: "POST", body:_object})
    .then((res) => {
      console.log(res);
      if(res.status === 200){
        HandleResponse();
      } else{
        HandleError();
      }
    })
    
        
  }

  return (
    <Container1>
            <Annonce/>
             <Navbar/>
    <Container>
      <Wrapper>
        <Title>Connexion</Title>
        <Form onSubmit={onSubmit}>
          <Input type='email' name="email" placeholder="email" value={email} onChange={handleEmail}></Input>
          <Input type="password" name="password" placeholder="password" value={password} onChange={handlePassword}></Input>
          <Button>CONNEXION</Button>
          <Link>VOUS SOUVENEZ-VOUS DE VOTRE MOT DE PASSE ?</Link>
          <Link>S'INSCRIRE</Link>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
        <Footer/>  
        </Container1>
  );
};

export default Login;
