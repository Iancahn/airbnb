import React from 'react';

function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }


    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} alt="" className="card--image" />
            <div className='card--stats'>
                {/* stars pngs */}
                <img src='../images/star.png' className="card--star" alt="the star rating" />
                <span>{props.stats.rating}</span>
                <span className='gray'>({props.stats.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className='bold'>From ${props.price} per night</span></p>
        </div>
    )
}

export default Card;