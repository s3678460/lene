import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    {/* Sidebar  */}
                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3 className="text-center">Lene</h3>
                            <strong>L</strong>
                        </div>
                        <div className="userimage text-center">
                            <img src="https://storage.googleapis.com/yn-influencer/Avatar%20Default.png" alt="..." />
                            <p className="username">DemoAsia</p>
                            <p className="userrole">Marketer</p>
                        </div>

                        <ul className="list-unstyled CTAs">
                            <li>
                                <a href="" className="discover">
                                    <div className="icondiscover"><span className="fas fa-globe"></span></div>
                                    <div className="textdiscover">Discover Page</div>
                                </a>
                            </li>
                            <li>
                                <a href="" className="collections">
                                    <div className="iconcollections">
                                        <span className="fas fa-portrait"></span>
                                    </div>
                                    <div className="textcollections">My Collections</div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* Page Content  */}
                    <div id="content">
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
                        <h2>Lorem Ipsum Dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="line" />
                        <h2>Lorem Ipsum Dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="line" />
                        <h2>Lorem Ipsum Dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="line" />
                        <h3>Lorem Ipsum Dolor</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;