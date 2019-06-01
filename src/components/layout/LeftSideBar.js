import React, { Component } from 'react'

export default class LeftSideBar extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
