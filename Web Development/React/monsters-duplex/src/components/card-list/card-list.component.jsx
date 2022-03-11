import React from 'react';
import { Card } from '../card/card.component.jsx';
import './card-list.styles.css'

export const CardList = (props) => (
    <div className = 'card-list'>
        {/*This map function : Calls a defined callback function on each element of an array, and returns an array that contains that element.

        Means : For every element of the monster array it will pass it to the Card Component to display it...
        */}
        {props.monsters.map(
            monster => (
            <Card key={monster.id} monster = {monster}/>
            // Here we used key to point out every element as unique if we need to change that later on then we need a unique identity to identify to that element
        ))}
    </div> 
); 