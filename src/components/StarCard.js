import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import {LoadDiv, StylableH1, Form, Button} from './styles'

const CardHolder = () => {
    
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    const nextPage = () => (
        setLoad(false),
        (page === 9) ? setPage(1) : setPage(page + 1)
    );
    useEffect(() => {
        
        axios
            .get(`https://swapi.co/api/people/?page=${page}`)
            .then(
                res => (
                    setData(res.data.results.map(person => person)),
                    setLoad(true)
                    )  
            )
            .catch(error => console.log('There was an error with the first pull: ', error))
            
    },[page]);
        
    return (
        
        <>
            <StylableH1>
                Star Wars Characters
            </StylableH1>
            
            <Form id='form'>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(1))} checked>Page 1</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(2))}>Page 2</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(3))}>Page 3</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(4))}>Page 4</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(5))}>Page 5</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(6))}>Page 6</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(7))}>Page 7</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(8))}>Page 8</Button>
                <Button type='radio' onClick={e => (e.preventDefault(),setLoad(false),setPage(9))}>Page 9</Button>
            </Form>
    
            <LoadDiv>
                {load===false?(<img src='https://i.imgur.com/QhF30Kf.gif' alt='loading'/>):(<div></div>)}
            </LoadDiv>
            
            <Card data={data} />
        </>
        
    )
};

export default CardHolder;