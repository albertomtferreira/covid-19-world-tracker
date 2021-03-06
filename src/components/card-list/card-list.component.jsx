import React from 'react';
import {Card} from '../card/card.component';
import './card-list.styles.css';


export const CardList = props => (
    <div className='card-list'>
    {props.data.map(country => (
        <Card key={country.country} country={country} />
      ))}
    </div>
)