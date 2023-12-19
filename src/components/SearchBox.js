import React, { Component } from 'react'

export class SearchBox extends Component {
  render() {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" id='search' type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" >Search</button>
        </form>
    )
  }
}

export default SearchBox