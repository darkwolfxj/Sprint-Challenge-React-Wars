import React from 'react';
import {Wrapper, CardDiv} from './styles';
const Card = props => {
    return (
<Wrapper>
        {props.data.map(d=>
        <CardDiv key={d.name}>
        <p>Name: {      d.name}</p>
        <p>Height: {    d.height}cm</p>
        <p>Mass: {      d.mass}kg</p>
        <p>Hair Color: {d.hair_color}</p>
        <p>Eye Color: { d.eye_color}</p>
        <p>Birth Year: {d.birth_year}</p>            
        </CardDiv>
    )}
</Wrapper>
    )
}
export default Card;