// Code MovieReviews Here

import React from 'react'

const MovieReviews = props => {
  return (
    <ul className='review-list'>
      {props.reviews.map(review => <li className='review'>{review.display_title}</li>)}
    </ul>
  )
}

export default MovieReviews
