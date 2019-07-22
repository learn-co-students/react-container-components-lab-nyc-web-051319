import React from 'react';

// Code MovieReviews Here
const MovieReview = props => (
  <div className="review">
    <h2>{props.title}</h2>
    <h4>{props.date}</h4>
    <p>{props.summary}</p>
    <a href={props.link}>Article Link</a>
  </div>
)

const MovieReviews = props => (
  <div className="review-list">
    {props.reviews.map(review => < MovieReview title={review.display_title} date={review.publication_date} summary={review.summary_short} link={review.link.url}/>)}
  </div>
)

export default MovieReviews
