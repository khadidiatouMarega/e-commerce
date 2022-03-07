import styled from "styled-components";
import CategoriesItem from "./CategoriesItem";
import React, { useState, useEffect } from 'react';

const Container = styled.div`
display: flex;
padding: 20px;
background-color: white;
justify-content: space-between;
`

const Categories = () => {

 
    let url = '/api/articles';

    const [articles, setArticles] = useState([ ]);

    const getData = () => {
   fetch(url, { method: "GET"})
    .then(res => res.json())
    .then(data =>{
        setArticles(data.articles);
        // console.log("1",articles)
    });
    }
    useEffect(() => {
     getData();
     }, [])
// console.log("2",articles);
    return (
        <Container>
             {articles.map(item=>(
                <CategoriesItem item={item} key={item.id}/>
            ))} 
        </Container>
    )
}

export default Categories
