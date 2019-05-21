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
                        {/* Banner */}
                        <div className="banner">
                            <img
                                className="imageBanner image-responsive"
                                src="https://storage.googleapis.com/yn-influencer/discover%20frontpage%20banner%20bg.jpg"
                                alt="Influencer"
                            />
                            <div className="overlayBanner">
                                <div className="textBanner">
                                    <h6>SEARCH INFLUENCERS TO FIND YOUR IDEAL TARGET AUDIENCE</h6>
                                    <br />
                                    <button className='btn btn-outline-light btn-banner'>DISCOVER ALL INFLUENCERS</button>
                                </div>
                            </div>
                        </div>
                        {/* options */}
                        <h5 className="pt-5 pb-3 text-center">Or choose an influence category that you are looking for</h5>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Automotive.jpg" />
                                    <p className="nameCate text-center py-3">Automotive</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Cooking.jpg" />
                                    <p className="nameCate text-center py-3">Cooking</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Entertainment.jpg" />
                                    <p className="nameCate text-center py-3">Entertainment</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Family%20&%20Home%20Care.jpg" />
                                    <p className="nameCate text-center py-3">Family & Home Care</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Fashion.jpg" />
                                    <p className="nameCate text-center py-3">Fashion</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Food%20&%20Drink.jpg" />
                                    <p className="nameCate text-center py-3">Food and Drink</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Health%20care.jpg" />
                                    <p className="nameCate text-center py-3">Health Care</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Interior%20Design.jpg" />
                                    <p className="nameCate text-center py-3">Interior Design</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Lifestyle.jpg" />
                                    <p className="nameCate text-center py-3">Life Style</p>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="influencerCate">
                                    <img className="imageCate img-fluid" src="https://storage.googleapis.com/yn-influencer/Travel.jpg" />
                                    <p className="nameCate text-center py-3">Travel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;