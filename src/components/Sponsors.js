import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import '../assets/vision.css'
import '../assets/personnel.css'
import '../assets/home.css';
import '../assets/sponsors.css'

import { NavLink } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Personnel extends Component {
    render(){
        return (

            <div className="sponsor-bg">
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
                    <p className="responsive-sponsor-p">Sponsors</p>
                    <img className="responsive-sponsor-img" src="https://sumnerschools.org/images/stories/PupilServices/Autism%20Society%20of%20MTN.png"/>
                    <h5>Members of the Autism Society of Middle Tennessee</h5><br/><br/><br/><br/>

                    <img src="http://www.paulineandthomashealthcare.com/SiteResource/Site_105265/Customize/Image/image/DIDS_Logo_Web.gif"/><br/>
                    <h5>Provider agency for the Division of Intellectual Disability Services</h5><br/><br/>

                    <img src="http://www.paulineandthomashealthcare.com/SiteResource/Site_105265/Customize/Image/image/TN%20logo.jpg"/>
                </ReactCSSTransitionGroup>

            </div>

        )
    }
}