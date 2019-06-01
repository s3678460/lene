import React, { Component } from 'react'

export default class DetailPage extends Component {
    render() {
        return (
            <div>
                <div className="wrap-if">
                    <div className="social-if">
                        <div className="px-4 pt-3 pb-2 text-center">
                            <a><i className="fab fa-facebook-square" /></a>
                        </div>
                        <div className="px-4 pb-2 text-center">
                            <a><i className="fas fa-flag" /></a>
                        </div>
                        <div className="px-4 pb-2 text-center">
                            <a><i className="fab fa-instagram" /></a>
                        </div>
                        <div className="px-4 pb-3 text-center">
                            <a><i className="fab fa-youtube" /></a>
                        </div>
                    </div>
                    <div className="image-if">
                        <div>
                            <img
                                alt="image-if"
                                src="https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/55615838_1237668416399192_7240727949480034304_n.jpg?_nc_cat=1&_nc_ad=z-m&_nc_cid=0&_nc_zor=9&_nc_ht=scontent.xx&oh=9a6d61d5cc69b680f3bc51c799644f31&oe=5D743C4C" />
                        </div>
                    </div>
                    <div className="detail-if pt-2 pl-4">
                        {/* <div className="mr-4">
                            <div className="float-left text-center">
                                <h1>Dũng Bùi Tiến</h1>
                            </div>
                            <div className="float-right pt-2">
                                <button className="btn btn-info pull-right">
                                    <i class="fas fa-layer-group"></i>  Add to Collection</button>
                            </div>
                        </div> */}
                        <div className="mr-4 di1">
                            <div className="di2">
                                <h1>Dũng Bùi Tiến</h1>
                            </div>
                            <div className="di3">
                                <button className="btn btn-info float-right">
                                    <i class="fas fa-layer-group"></i>  Add to Collection</button>
                            </div>
                            <div className="di4">
                                <div className="di5">
                                    {/* <ul className="list-unstyled CTAs">
                                        <li>
                                            inf.size: <h5 style={{ display: 'inline' }}><span className="badge badge-pill badge-danger">Mega</span></h5>
                                        </li>
                                        <li >
                                            inf.type: <p style={{ display: 'inline' }}>Professional</p>
                                        </li>
                                    </ul> */}
                                    <div className="py-1">Inf.size: <h5 style={{ display: 'inline' }}>
                                        <span className="badge badge-pill badge-danger">Mega</span></h5>
                                    </div>
                                    <div className="py-1">Inf.type: <p style={{ display: 'inline' }}>Professional</p></div>
                                    <div className="py-1">Location: <p style={{ display: 'inline' }}>Thanh Hóa Province</p></div>
                                    <div className="py-1"><span className="text-info">Export to get contact info</span></div>
                                </div>
                                <div className="di6">
                                    <div className="py-1"><span className="fas fa-briefcase"></span> <strong style={{ display: 'inline' }}>PROFESSIONS</strong>
                                    </div>
                                    <div className="py-1"><h5 style={{ display: 'inline' }}>
                                        <span className="badge badge-pill badge-secondary">Football Player</span></h5>
                                    </div>
                                </div>
                                <div className="di7">
                                    <div className="py-1"><span className="fas fa-briefcase"></span> <strong style={{ display: 'inline' }}>CATEGORIES</strong>
                                        <div className="py-1">Entertainment . Fashion . Sport . Physical Wellness</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-if">
                        <div className="footer-if-left">
                            <div className="ml-4">
                                <span>STATUS:  <strong>APPROVED</strong> <i className="fas fa-info-circle"></i></span>
                            </div>
                        </div>
                        <div className="footer-if-right">
                            <div className="mr-4">
                                <button className="btn btn-outline-info btn-sm float-right"><i className="fas fa-file-export" /> Export</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
