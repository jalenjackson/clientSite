import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import '../assets/vision.css'
import '../assets/personnel.css'
import '../assets/home.css';


import { NavLink } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Personnel extends Component {
    render(){
        return (

            <div className="vision-bg">
                <div className="vision-navbar">
                    <h4 className="logo-middle responsive-vision-logo">Pauline And Thomas HealthCare Inc</h4>

                    <ul className="nav navbar-nav navbar-right move-right responsive-vision-ul">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/vision" >Vision</NavLink></li>
                        <li><NavLink to="/personnel">Personnel</NavLink></li>
                        <li><NavLink to="/news">News and Events</NavLink></li>
                        <li><NavLink to="/sponsors">Sponsors</NavLink></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                    </ul>

                </div>
                <div className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="responsive-navigation">
                        </div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <h4 className="logo-middle home-logo-middle responsive-nav-title">Pauline And Thomas HealthCare Inc</h4>

                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">

                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/vision">Vision</NavLink></li>
                                <li><NavLink to="/personnel">Personnel</NavLink></li>
                                <li><NavLink to="/news">News and Events</NavLink></li>
                                <li><NavLink to="/sponsors">Sponsors</NavLink></li>
                                <li><NavLink to="contact">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                <section id="pricing" className="pad-lg">
                    <div className="container">
                        <div className="row margin-40">
                            <div className="col-sm-8 col-sm-offset-2 text-center">
                                <h2 className="white">Personnel</h2>
                                <p className="white"></p>
                            </div>
                        </div>

                        <div className="row margin-50">

                            <div className="col-sm-4 pricing-container wow fadeInUp" data-wow-delay="1s">
                                <br />
                                <ul className="list-unstyled pricing-table text-center">
                                    <li className="headline"><h5 className="white">Dr. Margaret T. Mmbaga</h5></li>
                                    <li className="price"><div className="amount">President/Founder</div></li>
                                    <li className="info">Dr. Mmbaga, is primarily an Educator with 30 years of experience in teaching and scientific research.  Dr. Mmbaga obtained her PhD from the University of Wisconsin, Madison and has been awarded more than $3 million competitive grants to funds her area of interest. Much of Dr Mmbaga’s energy has also gone into raising her three children as a single parent and she prides herself as a humanitarian; she strongly believes that meaningful life has to include compassionate impact to others.  Dr Mmbaga is a Founder of Pauline and Thomas Healthcare Inc</li>
                                </ul>
                            </div>

                            <div className="col-sm-4 pricing-container wow fadeInUp" data-wow-delay="0.4s">
                                <ul className="list-unstyled pricing-table active text-center">
                                    <li className="headline"><h5 className="white">Tracy Wolf</h5></li>
                                    <li className="price"><div className="amount">Executive Director</div></li>
                                    <li className="info">Mr. Wolf is a military veteran who has served the United States Army. He retired from the U.S. Army after 24 ½ years of service; he is a natural leader with extensive experience and a strong leadership and entrepreneurial skill set. He has specialized experience in transition strategic management which has resulted in higher quality of care for service recipients. Mr. Wolf is Bronze Star recipient and received a B.A in Business Administration with a concentration on Management.</li>
                                </ul>
                            </div>

                            <div className="col-sm-4 pricing-container wow fadeInUp responsive-personnel" data-wow-delay="1.3s">
                                <br />
                                <ul className="list-unstyled pricing-table text-center">
                                    <li className="headline"><h5 className="white">Nick Mmbaga</h5></li>
                                    <li className="price"><div className="amount">Financial Accountant</div></li>
                                    <li className="info">Mr. Mmbaga attended undergraduate school at Middle Tennessee State University, receiving a B.A in Business Administration with a concentration on Business Finance. He is currently pursuing an MBA at Belmont University with a emphasis on Healthcare management. Mr. Mmbaga has over three years experience in the healthcare industry. He sat as a senator for the college of business in the Student Government Association and he held office as treasurer in Financial Management Association at MTSU.</li>

                                </ul>
                            </div>

                        </div>

                    </div>

                    <p className="personnel-p">Pauline And Thomas Healthcare. 610 West College Street Suite 170, Murfreesboro, TN 37130
                        Phone: (615) 896 8231 Fax: (615) 896 8232. Email: pauline.thomashc@gmail.com</p>
                </section>
                </ReactCSSTransitionGroup>

            </div>

        )
    }
}