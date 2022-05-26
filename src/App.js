import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import './App.css';
import './Main.css'
import Main from "./Main";
import Review from "./Review";


function App() {
    return (
        <div className="App">
            <Container>
                <Title> 내 일주일은? </Title>
                <Route path="/" exact render={(props) => ( 
                <Main />)}/>
                <Route path="/review/:days" component={Review} />
            </Container>
        </div>
    );
}

const Container = styled.div`
max-width: 350px;
min-height: 10vh;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h3`
text-align: center;

`



export default App;