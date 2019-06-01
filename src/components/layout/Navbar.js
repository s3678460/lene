import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-align-left" />
            </button>
            <span className="ml-3 mr-auto">Discover Page</span>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search infulencer by Name, FBID, URL" aria-label="Search" />
              <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <hr />
      </div>
    )
  }
}
