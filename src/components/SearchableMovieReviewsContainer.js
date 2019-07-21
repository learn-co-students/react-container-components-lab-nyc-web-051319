import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 's4W6GWzAYpiKDGYJT2lsC6svT70OQPSP';
const BASE_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {

  state = {
    reviews: [],
    searchTerm: ''
  }

  fetchData = (event) => {
    event.preventDefault()
    fetch(BASE_URL + `${this.state.searchTerm}`)
    .then(function(resp) {
      if (resp.status >= 400) {
			   throw new Error("Bad response from server");
		  }
      return resp.json()
    })
    .then(json => {
      this.setState({
        reviews: json.results
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  renderMovies = () => {
    return (
      <div>
        <h2>Movie Review By Search:</h2>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.fetchData}>
          <input type='text' name='input' value={this.state.searchTerm} onChange={this.handleChange} />
          <input type='submit' />
        </form>
        {this.state.reviews.length > 0 ? this.renderMovies() : null}
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
