import React, { Component } from 'react';
import { Line, HorizontalBar, Chart, Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartFG: {
                dataFG: {
                    datasets: [
                        {
                            label: 'Follower Growth',
                            data: [
                                3213454,
                                3213152,
                                3212461,
                                3212142,
                                3212065,
                                3211282,
                                3201974,
                                3201765,
                                3201779
                            ],
                            backgroundColor: "rgba(56, 159, 219, 0.2)",
                            borderColor: "rgba(56, 159, 219, 1)",
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(56, 159, 219, 1)',
                            hoverBackgroundColor: "rgba(56, 159, 219, 0.4)",
                            hoverBorderColor: "rgba(56, 159, 219, 1)",
                        }
                    ]
                },
                optionFG: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.yLabel;
                            },
                            title: () => {
                                return ''
                            }
                        }
                    },
                    scales: {

                        yAxes: [{
                            ticks: {
                                min: 3200000,
                                max: 3215000,
                                stepSize: 3000
                            }
                        }],
                        xAxes: [{
                            type: 'category',
                            labels: ['08/05', '09/05', '10/05', '11/05', '12/05', '13/05', '04/06', '06/06', '07/06'],
                        }],
                    }
                }
            },
            chartABL: {
                dataABL: {
                    datasets: [
                        {
                            label: 'Follower Growth',
                            data: [
                                19.13, 18.25, 4.73, 3.09, 2.50
                            ],
                            backgroundColor: "rgb(56, 159, 219)",
                            borderColor: "rgb(56, 159, 219)",
                            borderWidth: 2,
                            pointBackgroundColor: 'rgb(56, 159, 219)',
                            hoverBackgroundColor: "rgb(56, 159, 219)",
                            hoverBorderColor: "rgb(56, 159, 219)",
                        }
                    ]
                },
                optionABL: {
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            formatter: (value, context) => {
                                return value + '%'
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                min: 1,
                                max: 100,
                                stepSize: 10
                            },
                        }],
                        yAxes: [
                            {
                                type: 'category',
                                labels: [
                                    'Hà Nội City',
                                    'Hồ Chí Minh City',
                                    'Thanh Hóa Province',
                                    'Đồng Nai Province',
                                    'Hải Phòng City'
                                ],
                            }
                        ]
                    }
                }
            },
            chartABA: {
                dataABA: {
                    datasets: [
                        {
                            label: 'Follower Growth',
                            data: [
                                0.04, 77.68, 21.83, 0.36, 0.04
                            ],
                            backgroundColor: "rgb(155, 39, 175)",
                            borderColor: "rgb(155, 39, 175)",
                            borderWidth: 2,
                            pointBackgroundColor: 'rgb(155, 39, 175)',
                            hoverBackgroundColor: "rgb(155, 39, 175)",
                            hoverBorderColor: "rgb(155, 39, 175)",
                        }
                    ]
                },
                optionABA: {
                    plugins: {
                        datalabels: {
                            anchor: 'end',
                            align: 'end',
                            formatter: (value, context) => {
                                return value + '%'
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false,
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                min: 1,
                                max: 100,
                                stepSize: 10
                            },
                        }],
                        yAxes: [
                            {
                                type: 'category',
                                labels: [
                                    '< 18',
                                    '18-24',
                                    '25-34',
                                    '35-44',
                                    '75+'
                                ],
                            }
                        ]
                    }
                }
            },
            chartABGFe: {
                dataABGFe: {
                    datasets: [
                        {
                            label: 'Follower Growth',
                            data: [70.39, 29.61],
                            backgroundColor: ["rgb(233, 38, 98)", "rgba(233, 38, 98, 0.5)"],
                        }
                    ],
                    labels: ['red', 'yellow']
                },
                optionABGFe: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false,
                    },
                    maintainAspectRatio: false
                }
            },
            chartABGMa: {
                dataABGMa: {
                    datasets: [
                        {
                            label: 'Follower Growth',
                            data: [29.61, 70.39],
                            backgroundColor: ["rgb(155, 39, 175)", "rgba(155, 39, 175,0.5)"],
                        }
                    ],
                },
                optionABGMa: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: false,
                    },
                    maintainAspectRatio: false
                }
            },
        }
    }
    componentWillMount() {
        Chart.pluginService.unregister(ChartDataLabels);
    }
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
                        <div className="mr-4 di1">
                            <div className="di2">
                                <h1>Dũng Bùi Tiến</h1>
                            </div>
                            <div className="di3">
                                <button className="btn btn-info float-right">
                                    <i className="fas fa-layer-group"></i>  Add to Collection</button>
                            </div>
                            <div className="di4">
                                <div className="di5">
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
                {/*platform label*/}
                <div className="pll"><a href=""><span><h3>Facebook Profile</h3></span></a></div>
                {/* platform tab */}
                <div className="plt">
                    <button className="btn btn-outline-info enable">AUDIENCE</button>
                    <button className="btn btn-outline-info">ANALYTICS</button>
                    <button className="btn btn-outline-info">RECENT ACTIVITIES</button>
                </div>
                {/* platform charts */}
                <div className="wrap-plc">
                    <div className="plc-tf">
                        <div className="plc-form wrap-plc-ov">
                            <div className="plc-ov1">
                                <div>
                                    TOTAL FOLLOWER
                                        <span className="badge badge-pill badge-danger ml-2" style={{ fontSize: '1rem' }}>Mega</span>
                                </div>
                            </div>
                            <div className="plc-ov2">
                                <div>
                                    <span className="fas fa-info-circle float-right pr-4"></span>
                                </div>

                            </div>
                            <div className="plc-ov3">
                                <div>3,201,934</div>
                            </div>
                            <div className="plc-ov4">
                                <span className="fas fa-user-friends float-right pr-4"></span>
                            </div>
                        </div>
                    </div>
                    <div className="plc-fg">
                        <div className="plc-form wrap-plc-ov">
                            <div className="plc-ov1">
                                <div>FOLLOWER GROWTH (LAST 4W)</div>
                            </div>
                            <div className="plc-ov2">
                                <div>
                                    <span className="fas fa-info-circle float-right pr-4"></span>
                                </div>
                            </div>
                            <div className="plc-ov3">
                                <div>-11,610<span style={{ fontSize: '20px', display: 'inline', lineHeight: '39px' }}>(-0.36%)</span></div>
                            </div>
                            <div className="plc-ov4">
                                <span className="fas fa-chart-line float-right pr-4"></span>
                            </div>
                        </div>
                    </div>
                    <div className="plc-af">
                        <div className="plc-form wrap-plc-ov">
                            <div className="plc-ov1">
                                <div>% ACTIVE FOLLOWER</div>
                            </div>
                            <div className="plc-ov2">
                                <div>
                                    <span className="fas fa-info-circle float-right pr-4"></span>
                                </div>
                            </div>
                            <div className="plc-ov3">
                                <div>85 %</div>
                            </div>
                            <div className="plc-ov4">
                                <span className="fas fa-bolt float-right pr-4"></span>
                            </div>
                        </div>
                    </div>
                    <div className="plc-fgc">
                        <div className="plc-form">
                            <div>
                                <div className="mb-3">
                                    <span style={{ fontSize: '16px' }}>Follower Growth</span>
                                    <span style={{
                                        fontSize: '13px',
                                        marginLeft: '5px',
                                        color: '#999999'
                                    }}
                                    >(Last 4 weeks)</span>
                                </div>
                                <div style={{ position: 'relative', width: '99%' }}>
                                    <Line
                                        data={this.state.chartFG.dataFG}
                                        height={80}
                                        options={this.state.chartFG.optionFG}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="plc-ablc">
                        <div className="plc-form">
                            <div>
                                <div>
                                    <span style={{ fontSize: '16px' }}>Allocate by Locations</span>
                                </div>
                                <div style={{ position: 'relative', width: '99%' }}>
                                    <HorizontalBar
                                        plugins={[ChartDataLabels]}
                                        data={this.state.chartABL.dataABL}
                                        options={this.state.chartABL.optionABL}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="plc-abac">
                        <div className="plc-form">
                            <div>
                                <div>
                                    <span style={{ fontSize: '16px' }}>Allocate by Ages</span>
                                </div>
                                <div style={{ position: 'relative', width: '99%' }}>
                                    <HorizontalBar
                                        plugins={[ChartDataLabels]}
                                        data={this.state.chartABA.dataABA}
                                        options={this.state.chartABA.optionABA}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="plc-abgc">
                        <div className="plc-form">
                            <div>
                                <div>
                                    <span style={{ fontSize: '16px' }}>Allocate by Genders</span>
                                </div>
                                <div style={{ marginTop: '13px' }}>
                                    <div className="chartFe">
                                        <div style={{ width: '25%' }} className="text-center">
                                            <span className="fas fa-venus fa-4x" style={{ color: 'rgb(233, 30, 98)' }}></span>
                                        </div>
                                        <div style={{ width: '45%' }}>
                                            <div style={{ color: 'rgb(233, 30, 98)', fontSize: '18px', marginBottom: '10px' }}>Female</div>
                                            <div style={{ fontSize: '32px', lineHeight: '1.5rem' }}>70.39%</div>
                                        </div>
                                        <div style={{ width: '30%' }}>
                                            <div style={{ marginTop: '-10px' }}>
                                                <Pie
                                                    height={50}
                                                    data={this.state.chartABGFe.dataABGFe}
                                                    options={this.state.chartABGFe.optionABGFe}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chartMa">
                                        <div style={{ width: '25%' }} className="text-center">
                                            <span className="fas fa-mars fa-4x" style={{ color: "rgb(155, 39, 175)" }}></span>
                                        </div>
                                        <div style={{ width: '45%' }}>
                                            <div style={{ color: 'rgb(155, 39, 175)', fontSize: '18px', marginBottom: '10px' }}>Male</div>
                                            <div style={{ fontSize: '32px', lineHeight: '1.5rem' }}>29.61%</div>
                                        </div>
                                        <div style={{ width: '30%' }}>
                                            <div style={{ marginTop: '-10px' }}>
                                                <Pie
                                                    height={50}
                                                    data={this.state.chartABGMa.dataABGMa}
                                                    options={this.state.chartABGMa.optionABGMa}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="plc-abec"><div className="plc-form">Allocate by Education</div></div>
                    <div className="plc-abjc"><div className="plc-form">Allocate by Job Level</div></div>
                </div>
            </div>
        )
    }
}
