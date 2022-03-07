import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Annonce = () => {
    return (
        <div>
            <Container>
                Shopper sans polluer avec une livraison gratuite à partir de 50€!
            </Container>
        </div>
    )
}

export default Annonce
