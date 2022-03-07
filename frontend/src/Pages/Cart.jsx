import React, { Component, Fragment } from 'react';

import styled from 'styled-components';
import Annonce from '../Components/Annonce';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Newsletter from '../Components/Newsletter';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

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

let nbrProduct = 0;
let total = 0;


const Cart = () => {
  return(
   <Container1>
   <Annonce/>
    <Navbar/>
    <Container>
    <Fragment>
        
                <section className="">
                    <div className="">
                        <h1>Panier<span className="">.</span></h1>
                        <h3 id="">{nbrProduct} article(s)</h3>
                    </div>
                    <div className="">
                        {nbrProduct>0 && this.article()}
                    </div>


                    <div className="">
                        <div className="">
                           
                        </div>
                        <div className="">
                            
                            <h2>TOTAL : {total}€</h2>
                            <div className='' id='to_pay'>COMMANDER</div>
                        </div>
                    </div>


                </section>
            </Fragment>

            </Container> 
    <Newsletter/>
        <Footer/> 
        </Container1>
  )
};

export default Cart;
