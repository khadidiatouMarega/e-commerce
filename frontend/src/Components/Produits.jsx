import styled from "styled-components";
import Produit from "./Produit";
import {popularProduits} from "../Pages/Data";
import Annonce from "./Annonce";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";
import Footer from "./Footer";


const Container1 = styled.div`
`

const Container = styled.div`
display: flex;
padding: 10px;
background-color: white;
flex-wrap: wrap;
justify-content: space-between;
`
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Produits = () => {
    return (
        
        <Container1>
            <Annonce/>
             <Navbar/>
             <Title>Collection </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filtrer:</FilterText>
          <Select>
            <Option disabled selected>
              Coleur
            </Option>
            <Option></Option>
            <Option>Blanc</Option>
            <Option>Noire</Option>
            <Option>Rouge</Option>
            <Option>Bleu</Option>
            <Option>Jaune</Option>
            <Option>Verte</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Taille
            </Option>
            <Option>S</Option>
            <Option>XS</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filtrer:</FilterText>
          <Select>
            <Option selected>Nouveauté</Option>
            <Option>Prix (asc)</Option>
            <Option>Prix (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
        <Container>
            {popularProduits.map(item=>(
                <Produit item={item} key={item.id}/>
            ))}
            
        </Container> 
        <Newsletter/>
        <Footer/>  
        </Container1>
    )
}

export default Produits;
