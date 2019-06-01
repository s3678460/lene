import React, { Component } from 'react'

export default class DiscoverPage extends Component {
    render() {
        return (
            <div>
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
        )
    }
}
