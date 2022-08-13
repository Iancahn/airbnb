import React from 'react';

function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }


    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} alt="" className="card--image" />
            <div className='card--stats'>
                {/* stars pngs */}
                <img src='../images/star.png' className="card--star" alt="the star rating" />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.country}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className='bold'>From ${props.item.price} per night</span></p>
        </div>
    )
}

export default Card;