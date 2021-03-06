import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import '../assets/vision.css'
import { NavLink } from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
  export default class Vision extends Component {
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

                        <div className="vision-container">

                        <ReactCSSTransitionGroup
                        component="div"
                        transitionName="route"
                        transitionEnterTimeout={600}
                        transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}>
                    <p>Vision</p>

                            <img className="responsive-vision-img" src={require("../assets/img/collage.jpg")}/>

                            <h5> Pauline and Thomas Healthcare, Inc is a nonprofit 501(c)(3) corporation, and is licensed by the state of Tennessee’s Division of Intellectual Disabilities Services to provide services in Middle Tennessee. We are dedicated to meeting service recipient needs through a client oriented approach combining compassionate care with cost-effective health care service. Pauline and Thomas Healthcare Inc is recognized as a deliverer in philanthropic service. Visit our office and learn more about the services we provide and give today.
                                We use a client-centered management approach to increase quality of life and independence for our service recipients.
                                </h5>

                            <h1 className="responsive-vision-h1">What to expect from Pauline & Thomas Healthcare Inc</h1>

                            <ul className="responsive-vision-h1">
                                <li>Person Center Practices</li>
                                <li>Safety and Security</li>
                                <li>Risk Identification and Planning</li>
                                <li>Cost Effective Managemen</li>
                                <li>Quality of life improvement</li>
                                <li>Highly trained and skilled staff</li>
                                <li>Effective oversight and service implementation</li>
                                <li>Innovative Practices</li>

                            </ul>
                </ReactCSSTransitionGroup>
            </div>
                            </div>
        )
    }
}