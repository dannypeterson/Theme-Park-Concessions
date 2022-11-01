import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Snack = () => {
    
    let { id } = useParams();

    return(
        <div>
            <div className='snacks' onClick={onClick}>
        <div className='info-wrapper'>
            <h3>{snackName}</h3>
            <div className='img-wrapper'>
                <img src={img} alt='snack-image' />
            </div>
            <p>price: {price}</p>
          </div>
        </div>
            </div>

    )
}

export default Snack;