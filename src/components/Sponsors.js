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
                    <h4 className="logo-middle">Pauline And Thomas HealthCare Inc</h4>

                    <ul className="nav navbar-nav navbar-right move-right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/vision" >Vision</NavLink></li>
                        <li><NavLink to="/personnel">Personnel</NavLink></li>
                        <li><NavLink to="/news">News and Events</NavLink></li>
                        <li><NavLink to="/sponsors"  className="vision-active">Sponsors</NavLink></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>

                    </ul>
                </div>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                    <p>Sponsors</p>
                    <img src="https://sumnerschools.org/images/stories/PupilServices/Autism%20Society%20of%20MTN.png"/>
                    <h5>Members of the Autism Society of Middle Tennessee</h5><br/><br/><br/><br/>

                    <img src="http://www.paulineandthomashealthcare.com/SiteResource/Site_105265/Customize/Image/image/DIDS_Logo_Web.gif"/><br/>
                    <h5>Provider agency for the Division of Intellectual Disability Services</h5><br/><br/>

                    <img src="http://www.paulineandthomashealthcare.com/SiteResource/Site_105265/Customize/Image/image/TN%20logo.jpg"/>
                </ReactCSSTransitionGroup>

            </div>

        )
    }
}