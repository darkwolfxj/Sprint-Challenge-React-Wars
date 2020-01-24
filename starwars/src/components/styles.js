import styled from 'styled-components';

const Wrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`;
const CardDiv = styled.div`

    color: green;
    text-align: center;
    border: 1px solid green;
    margin: 1rem;
    background-color: black;
    width: 15%;
    border-radius: 10px;
    @media (max-width: 1150px){
        width: 25%;
        font-size: 1.5em;
    }
    @media (max-width: 1000px){
        width: 35%;
        font-size: 2em;
    }
    @media (max-width: 650px){
        width: 90%;
        font-size: 2.5em;
    }
    
`;
const LoadDiv = styled.div`

    position: absolute;
    left: 43%;
    top: 43%;
    
`;
const StylableH1 = styled.h1`

    margin:0.25em;
    font-size: 5rem;
    text-align: center;
    background: linear-gradient(lightgreen, black, lightgreen);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    
`;
const Form = styled.form`

    display: flex;
    justify-content: center;
    
`;
const Button = styled.button`

    color: green;
    background-color: rgb(0, 0, 0);
    border: none;
    padding: 1em;
    border-radius: 10px;
    box-shadow: 1px 2px green;
    &:active{
        transform: translateY(2px);
        box-shadow: none;
    }
    
`;

export {Wrapper, CardDiv, LoadDiv, StylableH1, Form, Button}