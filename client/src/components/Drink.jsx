import React from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Drink = ({onClick}) => {
    
    let { id } = useParams()

    return (
        <div className='drinks' onClick={onClick}>
            <div className='info-wrapper'>
                <h3>{drinkName}</h3>
                <div className='img-wrapper'>
                    <img src={img} alt='drink-image' />
                </div>
                <p>price: {price}</p>
            </div>
        </div>
    )
}

export default Drink;