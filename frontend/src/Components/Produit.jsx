import { AddShoppingCartOutlined, FavoriteBorderOutlined, SearchOutlined } from "@material-ui/icons";
import styled from "styled-components";
 
const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`;
const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 380px;
height: 530px;
display: flex;
align-items: center;
justify-content: center;
background-color: #eff7f7;
position: relative;
&:hover ${Info}{
    opacity: 1;
}
`

const Image = styled.img`
height: 75%;
z-index: 2;
`;
// width: 220px;
// height: 310px;

const Circle = styled.div`
width: 300px;
height: 300px;
background-color: white;
border-radius: 50%;
position: absolute;
`;
const Icon = styled.div`
width: 40px;
height: 40px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
margin: 10px;
transition: all 0.5s ease;
&:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
}
cursor: pointer;
`;


const Produit = ({item}) => {
    return (
        <Container>
           <Circle/>
           <Image src={item.img}/>
           <Info>
                <Icon>
                    <AddShoppingCartOutlined/>
                </Icon>
                 <Icon>
                     <SearchOutlined/>
                 </Icon>
                 <Icon>
                     <FavoriteBorderOutlined/>
                 </Icon>
           </Info>
        </Container>
    )
}

export default Produit;
