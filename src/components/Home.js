import React, {Component} from 'react'
import '../assets/home.css';
import '../assets/font-awesome/font-awesome.min.css';
import FontAwesome from 'react-fontawesome'
import { NavLink } from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
export default class Home extends Component {

    render(){

        return (
            <div className="home-container">

                    <div className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="responsive-navigation">
                            </div>
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="navbar-collapse collapse">
                                <h4 className="logo-middle home-logo-middle responsive-nav-title">Pauline And Thomas HealthCare Inc</h4>

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

                    <header>
                        <div className="container">
                            <div className="row">

                                <h4 className="responsive-name">Pauline And Thomas HealthCare Inc</h4>

                                <div className="col-xs-6">
                                    <a className="responsive-logo" href="index.html"><img src={require("../assets/img/logo.png")} alt="Logo"/></a>
                                </div>


                                <div className="col-xs-6 signin text-right navbar-nav hide-away">
                                    <a href="#pricing" className="scroll">Home</a>&nbsp; &nbsp;<NavLink to="/vision">Vision</NavLink>&nbsp; &nbsp;<a href="#">Personnel</a>&nbsp; &nbsp;<a href="#">News and Events</a>&nbsp; &nbsp;<a href="#">Sponsors</a>
                                </div>
                            </div>

                            <div className="row header-info">
                                <div className="col-sm-10 col-sm-offset-1 text-center">
                                    <h1 className="wow fadeIn responsive-h1">Independence Starts One Step At A Time</h1>
                                    <br />
                                    <p className="lead wow fadeIn responsive-heading" data-wow-delay="0.5s">Pauline & Thomas Healthcares, Inc<br/>
                                        provides the essential support to improve service recipient’s quality of life <br/> by establishing a setting where individuals with Intellectual Disability (ID) <br/> are active participants within the community. </p>
                                    <br />


                                    <div className="row">
                                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                            <div className="row">
                                                <div className="col-xs-6 text-right wow fadeInUp" data-wow-delay="1s">
                                                    <a href="#" className="btn btn-secondary btn-lg responsive-btn-move">Join Us</a>
                                                </div>
                                                <div className="col-xs-6 text-left wow fadeInUp" data-wow-delay="1.4s">
                                                    <NavLink to="/news" className="btn btn-primary btn-lg responsive-btn-move">News And Events</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="mouse-icon hidden-xs">
                        <div className="scroll"></div>
                    </div>

                    <section id="be-the-first" className="pad-xl">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn" data-wow-delay="0.6s">
                                    <h2>We Are A Non Profit Organization</h2>
                                    <p className="lead">Learn more about what to expect here at Pauline And Thomas Healthcare</p>
                                    <a href="#be-the-first" className="btn btn-secondary btn-lg scroll">Learn More</a>

                                </div>
                            </div>

                            <div className="iphone wow fadeInUp" data-wow-delay="1s">
                                <img className="img-down" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/19029511_309046586219152_4842554810235579311_n.jpg?oh=943bffd31813fc4d38d2aca9893f1422&oe=59FE808C"/>
                            </div>
                        </div>
                    </section>

                    <section id="main-info" className="pad-xl">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.4s">
                                    <hr className="line purple"/>
                                        <h3>Quality</h3>
                                        <p>The Pauline and Thomas Healthcare Corporation culture is one of quality and commitment ... value and improvement ... oversight and teamwork ... and honesty and integrity</p>
                                </div>
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="0.8s">
                                    <hr  className="line blue"/>
                                        <h3>Mission</h3>
                                        <p>Pauline & Thomas Healthcare, Inc mission is to support intellectually disabled individuals.</p>
                                </div>
                                <div className="col-sm-4 wow fadeIn" data-wow-delay="1.2s">
                                    <hr  className="line yellow"/>
                                        <h3>What To Expect</h3>
                                        <p>We are dedicated to meeting service recipient needs through a client oriented approach combining compassionate care with cost-effective health care service. Pauline and Thomas Healthcare Inc is recognized as a deliverer in philanthropic service.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="pricing" className="pad-lg">
                        <div className="container">
                            <div className="row margin-40">
                                <div className="col-sm-8 col-sm-offset-2 text-center">
                                    <h2 className="white">Meet The Owners</h2>
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

                                <div className="col-sm-4 pricing-container wow fadeInUp responsive-table" data-wow-delay="1.3s">
                                    <br />
                                    <ul className="list-unstyled pricing-table text-center">
                                        <li className="headline"><h5 className="white">Nick Mmbaga</h5></li>
                                        <li className="price"><div className="amount">Financial Accountant</div></li>
                                        <li className="info">Mr. Mmbaga attended undergraduate school at Middle Tennessee State University, receiving a B.A in Business Administration with a concentration on Business Finance. He is currently pursuing an MBA at Belmont University with a emphasis on Healthcare management. Mr. Mmbaga has over three years experience in the healthcare industry. He sat as a senator for the college of business in the Student Government Association and he held office as treasurer in Financial Management Association at MTSU.</li>

                                    </ul>
                                </div>

                            </div>

                        </div>
                    </section>


                    <section id="invite" className="pad-lg light-gray-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-sm-offset-2 text-center">
                                    <FontAwesome
                                        className='super-crazy-colors'
                                        name='sun-o'
                                        size='2x'
                                        spin
                                        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                                    />                                    <h2 className="black">President's Message</h2>
                                    <br />
                                    <p className="black">"I want to give a personal thanks to our staff and management on Pauline & Thomas Healthcare's Exceptional Performance score on this years annual Quality Assurance survey"- Dr. Margaret Mmbaga"</p>
                                    <br />



                                </div>
                            </div>
                        </div>
                    </section>





                    <footer>
                        <div className="container">

                            <div className="row">
                                <div className="col-sm-8 margin-20">
                                    <ul className="list-inline social">
                                        <li>Connect with us on</li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>

                                <div className="col-sm-4 text-right">
                                    <p><small>Copyright &copy; 2017. All rights reserved. <br/>
                                        Pauline & Thomas Healthcares, Inc</small></p>
                                </div>
                            </div>

                        </div>
                    </footer>
            </div>
        )
    }
}

