import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import '../assets/contact.css'



import { NavLink } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Personnel extends Component {
    render(){
        return (

            <div className="contact-container-bg">
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
                    transitionName="slide"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                    <p className="responsive-contact-p">Contact Us</p>

                    <h5>Pauline And Thomas Healthcare</h5>
                    <h5>610 West College Street Suite 170</h5>
                    <h5>Murfreesboro, TN 37130</h5>
                    <h5>Phone: (615) 896 8231</h5>
                    <h5>Fax: (615) 896 8232</h5>
                    <h5>Email: pauline.thomashc@gmail.com</h5>

                </ReactCSSTransitionGroup>
            </div>
        )
    }
}