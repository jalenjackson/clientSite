import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import '../assets/vision.css'
import '../assets/personnel.css'
import '../assets/home.css';
import '../assets/news.css';



import { NavLink } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default class Personnel extends Component {
    render(){
        return (

            <div className="news-container-bg">

                <div className="vision-navbar">
                    <h4 className="logo-middle">Pauline And Thomas HealthCare Inc</h4>

                    <ul className="nav navbar-nav navbar-right move-right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/vision">Vision</NavLink></li>
                        <li><NavLink to="/personnel">Personnel</NavLink></li>
                        <li><NavLink to="/news"  className="vision-active">News and Events</NavLink></li>
                        <li><NavLink to="/sponsors">Sponsors</NavLink></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>

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
                <p>News And Events</p>

                <h4>
                    Pauline & Thomas Healthcares, Inc provides the essential support to improve service recipient’s quality
                    of life by establishing a setting where individuals with Intellectual Disability
                    (ID) are active participants within the community. While the  agency
                    has accomplished small steps in its large mission it continues to encounter many
                    challenges.  One of the challenges the organization faces is to continue the quality, that make
                    its service special. This includes the ability to maintain skilled healthcare staff, provide quality
                    residential homes and necessary medical services for individuals with (ID) in a time period where state rates continue to decrease.
                    Pauline & Thomas Healthcare has been able to accomplish one of its initial quality goals and that is to reach the highest tier of quality service
                    provided. Pauline & Thomas received an exceptional performance on its most recent state mandated Quality
                    Assurance Survey. Pauline & Thomas Healthcare, Inc is proud to say the organization was only able to accomplish
                    this feat by the hard work of its dedicated employees, substantial support efforts from all service recipients support agents and
                    the continuous assistance from the Middle TN regional office of the Division of Intellectual Disabled Services.
                </h4>

                <h5>Pauline And Thomas Healthcare. 610 West College Street Suite 170, Murfreesboro, TN 37130
                    Phone: (615) 896 8231 Fax: (615) 896 8232. Email: pauline.thomashc@gmail.com</h5>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}