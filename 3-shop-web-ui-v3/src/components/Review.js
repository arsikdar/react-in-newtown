import React from 'react';
import 'font-awesome/css/font-awesome.css';

function renderStars(n) {
    let stars = [];
    for (let i = 0; i < n; i++) {
        stars.push(<i style={{ color: 'red', fontSize: '20px' }} className="fa fa-star" key={i}></i>)
    }
    return stars;
}

function Review(props) {
    let { value: review } = props;
    return (
        <div className="alert alert-info">
            {renderStars(review.stars)} &mdash; <span className="badge badge-dark">{review.author}</span>
            <hr />
            <div>{review.body}</div>
        </div>
    )
}

export default Review;