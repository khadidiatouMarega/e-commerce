import styled from "styled-components";
import {Send }  from '@material-ui/icons';

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Input = styled.input`
padding-left: 20px;
flex: 8;
border: none;
`
const InputContainer = styled.div`
height: 40px;
width: 50%;
background-color: white;
display: flex;
border: 1px solid lightgray;
justify-content: space-between;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
            <InputContainer>
            <Input placeholder="e-mail"></Input>
            <Button>
                <Send></Send>
            </Button>
            </InputContainer>
            
        </Container>
    )
}

export default Newsletter
