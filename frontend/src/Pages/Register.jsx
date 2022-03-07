import styled from "styled-components";
import React from 'react';
import { useState} from 'react';
import Annonce from "../Components/Annonce";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eff7f7;
`;
const Container1 = styled.div`
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
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agrement = styled.span`
  margin: 20px 0px;
  font-size: 12px;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 5px 20px;
  cursor: pointer;
  color: white;
  width: 160px;
`;
const ContSuccess = styled.div`
display: submitted ? '' : 'none',
`;
const ContError = styled.div`
`;
const ErrM = styled.h1`
`;
const CallM = styled.h1`
`;

const Register = () => {
  
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

    let url = '/api/register'
    let tmp = {"email":email, "password":password};
    let _object = JSON.stringify(tmp);
    
    function HandleResponse(){
      alert('Inscription reussi !')
      window.location.href = "/login"
    }
    function HandleError(){
      alert('Echec de votre inscription!')
    }
    fetch(url, { method: "POST", body:_object})
    .then((res) => {
      console.log(res);
      if(res.status === 200){
        HandleResponse();
      } else{
        HandleError();}
    })
  }

  return (
    <Container1>
            <Annonce/>
             <Navbar/>
    <Container>
      <Wrapper>
        <Title>Creer un compte</Title>
        <Form onSubmit={onSubmit}>
          <Input type='email' name="email" placeholder="email" value={email} onChange={handleEmail}></Input>
          <Input type='password' name="password"  placeholder="password"  value={password} onChange={handlePassword}></Input>
          <Agrement>
            En créant ce compte, je consent à vos politiques de confidentialité.
          </Agrement>
          <Button  type="submit">S'INSCRIRE</Button>
        </Form>
      </Wrapper>
    </Container>
    <Newsletter/>
        <Footer/>  
        </Container1>
  );
};

export default Register;
