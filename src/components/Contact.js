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
                    <h4 className="logo-middle">Pauline And Thomas HealthCare Inc</h4>

                    <ul className="nav navbar-nav navbar-right move-right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/vision">Vision</NavLink></li>
                        <li><NavLink to="/personnel">Personnel</NavLink></li>
                        <li><NavLink to="/news" >News and Events</NavLink></li>
                        <li><NavLink to="/sponsors">Sponsors</NavLink></li>
                        <li><NavLink to="contact"  className="vision-active">Contact Us</NavLink></li>

                    </ul>
                </div>

                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="slide"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                    <p>Contact Us</p>

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