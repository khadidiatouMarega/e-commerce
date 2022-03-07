import styled from  "styled-components";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh; 
position: relative;
`
const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
`
const Info = styled.div`
top: 0;
left: 0;
position: absolute;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
margin-bottom: 15px;
color:rgb(238, 236, 236);
`
const TitleP = styled.h1`
margin-bottom: 15px;
color:rgb(238, 236, 236);
`
const Button = styled.button`
border: none;
padding: 13px;
cursor: pointer;
background-color: rgb(238, 236, 236);
color: gray;
font-weight: 600;
`;

const CategoriesItem = ({item}) => {
    return (
        <Container>
           <Image src={item.photo}/>
          <Info>
              <Title>{item.name}</Title>
              <TitleP>{item.price}€</TitleP>
              <Button>J'EN PROFITE</Button>
          </Info>
        </Container>
    )
}

export default CategoriesItem;
