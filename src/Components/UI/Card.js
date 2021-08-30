import React from 'react';
//card is always a card like container
import './Card.css';
function Card(props) {
    const classes ='card ' + props.className;
return <div className ={classes}>{props.children}</div>;

}
export default Card;