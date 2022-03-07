import { ArrowLeftOutlined, ArrowRightOutlined,} from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../Pages/Data";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
   background-color: white;
   overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ddf3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 3;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  
`;
// transition: all 1s ease;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=>props.bg};

`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 70px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;
const Title = styled.h1`
font-size: 70px;

`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: #${props=>props.bg1};
cursor: pointer;
`;

const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0);
const handleClick = (direction) => {
  if(direction === "left"){
    setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3);
  }
  else{
    setSlideIndex(slideIndex < 3 ? slideIndex +1 : 0);
  }
};

  return (
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button bg1="11ffee00">COMMENCER</Button>
            </InfoContainer>
          </Slide>
            ))}
          {/* <Slide bg="a299dbfd">
            <ImgContainer>
              <Image src={ShopGirl2} />
            </ImgContainer>
            <InfoContainer>
              <Title>COLLECTION PRINTEMPS</Title>
              <Desc>PAS DE COMPROMIS SUR VOTRE STYLE! BENEFICIEZ DE 30% DE REDUCTION SUR LES NOUVEAUX ARRIVAGES.</Desc>
              <Button bg1="a299db">COMMENCER</Button>
            </InfoContainer>
          </Slide>

          <Slide bg="f1aa1c">
            <ImgContainer>
              <Image src={ShopGirl4} />
            </ImgContainer>
            <InfoContainer>
              <Title>SOLDES D'ETE</Title>
              <Desc>PAS DE COMPROMIS SUR VOTRE STYLE! BENEFICIEZ DE 30% DE REDUCTION SUR LES NOUVEAUX ARRIVAGES.</Desc>
              <Button bg1="f1aa1c">COMMENCER</Button>
            </InfoContainer>
          </Slide>
          <Slide bg="d3d3d392">
            <ImgContainer>
              <Image src={ShopGirl6} />
            </ImgContainer>
            <InfoContainer>
              <Title>ICI C'EST DEJA L'AUTOMNE</Title>
              <Desc>PAS DE COMPROMIS SUR VOTRE STYLE! BENEFICIEZ DE 30% DE REDUCTION SUR LES NOUVEAUX ARRIVAGES.</Desc>
              <Button bg1="d3d3d392">COMMENCER</Button>
            </InfoContainer>
          </Slide> */}
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
          <ArrowRightOutlined />
        </Arrow>
      </Container>
  );
};

export default Slider;

