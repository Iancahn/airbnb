import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src="" alt="" className="card--image" />
            <div className="card--stats">
                {/* stars pngs */}
                <img src="#" id="#" />
                <span>5.0</span>
                <span className='gray'>(6) • </span>
                <span className='gray'>USA</span>
            </div>
            <p>Life Lessons</p>
            <p><span className='bold'>From $??? per night</span></p>
        </div>
    )
}

export default Card;