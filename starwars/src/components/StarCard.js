import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import {LoadDiv, StylableH1, Form, Button} from './styles'

const CardHolder = () => {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    const nextPage = () => (
        setPage(page+1),
        (page === 9) ? setPage(1) : null
    );
    const changePage = () => {
        nextPage()
        setLoad(false)
        axios
            .get(`https://swapi.co/api/people/?page=${page}`)
            .then(
                response => (
                    setLoad(true),
                    setData(response.data.results.map(person => person)),
                    console.log('This is the new data', response.data),
                    console.log('nextPage was run')
                )
            )
    };
    useEffect(() => {
        axios
            .get('https://swapi.co/api/people/?page=1')
            .then(
                res => (
                    setPage(2),
                    setData(res.data.results.map(person => person)),
                    setLoad(true),
                    console.log('This is the data',res.data)
                    )  
            )
            .catch(error => console.log('There was an error with the first pull: ', error))
    },[]);
        
    return (
        <>
            
            <StylableH1>
                Star Wars Characters
            </StylableH1>
    <Form id='form'>
        <div>
        <Button type='submit' onClick={e => (e.preventDefault(),changePage())}>Next Page</Button>
        </div>
    </Form>
            <LoadDiv>
                {load===false?(<img src='https://i.imgur.com/QhF30Kf.gif' alt='loading'/>):(<div></div>)}
            </LoadDiv>
            <Card data={data} />        
        </>
    )
};
export default CardHolder;