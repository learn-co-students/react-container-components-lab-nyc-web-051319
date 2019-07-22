import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'nHwXp4LldSqfenPj2VOCW3heAXzE3k2Y';
const URL = `https://api.nytimes.com/svc/reviews/v2/reviews/search.json?query=godfather&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.search} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
        < MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
