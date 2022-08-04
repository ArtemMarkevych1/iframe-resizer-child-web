import React from 'react';
import {Typography} from '@mui/material';
import './card.style.scss'

function CardComponent({card, handleClick}) {
    return (
        <div className="card" onClick={handleClick}>
            <Typography className="title">{card.title}</Typography>
            <Typography className="text">{card.text}</Typography>
        </div>
    );
}

export default CardComponent;
