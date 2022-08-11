import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src='../images/katie-z' alt="" className="card--image" />
            <div className='card--stats'>
                {/* stars pngs */}
                <img src='../images/star.png' className="card--star" />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price} per night</span></p>
        </div>
    )
}

export default Card;