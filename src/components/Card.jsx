import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.img}`} alt="" className="card--image" />
            <div className='card--stats'>
                {/* stars pngs */}
                <img src='../images/star.png' className="card--star" alt="the star rating" />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className='bold'>From ${props.price} per night</span></p>
        </div>
    )
}

export default Card;