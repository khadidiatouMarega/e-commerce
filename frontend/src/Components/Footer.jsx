import Cards from '../Assets/credit_card.png';
import {Facebook, Instagram, MailOutline, MailOutlined, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import styled from "styled-components";
import Sweat from "../Assets/eco.png";

const Container = styled.div`
  display: flex;
  background-color: white;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  display: flex;
  font-family: cursive;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin-bottom: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const Payment = styled.img`
width: 50%;
`;
const Image = styled.img`
margin-right: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> <Image src={Sweat} />ShopHere.</Logo>
        {/* style={{fontFamily: 'Poppins', sansSerif}}  */}
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
          voluptate doloribus natus, delectus odio nihil laborum veritatis!
          Autem magni quaerat eius unde doloribus, facilis explicabo. Accusamus
          obcaecati voluptatum ipsa corporis.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Liens</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Suivre mon colis</ListItem>
          <ListItem>Mon compte</ListItem>
          <ListItem>Accessoires</ListItem>
          <ListItem>Panier</ListItem>
          <ListItem>Chaussures</ListItem>
          <ListItem>Whishlist</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> 42 rue Carmes, le krêmlin-biêtre 947200
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/>
          09 50 50 49 42
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "13px"}}/>
          contact@shophere.com
        </ContactItem>
        <Payment src={Cards} />
      </Right>
    </Container>
  );
};

export default Footer;
