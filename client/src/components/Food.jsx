import React from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Food = ({foodName, price, img, onClick}) => {

    let { id } = useParams;

    return(
        <div className='foods' onClick={onClick}>
            <div className='info-wrapper'>
                <h3>{foodName}</h3>
                <div className='img-wrapper'>
                    <img src={img} alt='food-image' />
                </div>
                <p>price: {price}</p>
            </div>
        </div>
        )
}

export default Food;