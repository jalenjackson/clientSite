import React, {Component} from 'react'
import '../assets/stylesheets/nav.css';
import {NavLink} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'


var divStyle = {
    color: 'black',
    fontSize: "40px",
};

export default class Nav extends Component {
    render(){
        return (
            <div>

                <div className="main-navbar">



                    <div className="design-line"></div>
                    <div className="left-side-nav-items">

                        <NavLink exact activeClassName='active' className="home-link"  to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="about-me-link"  to="/about">About</NavLink>
                        <NavLink activeClassName="active" className="fav-music"  to="/gallery">Image Gallery</NavLink>
                        <NavLink activeClassName="active" className="tools"  to="/resume">Resume</NavLink>
                        <a href="mailto:vagabondrebelart@gmail.com?Subject=Inquiry" activeClassName="active">Contact</a>


                    </div>



                </div>


                <div className="animated-dropdown">
                    <div className="pulldown-items">
                        <h1 className="animated-dropdown-h1  animated ">PROJECTS</h1>
                        <ul className="listOf-items-dropdown animated ">
                            <li className="project-li"><NavLink activeClassName="active" className="ruby-link nav-link" to="/ruby">Ruby On Rails</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="react-link nav-link" to="/react">React Js</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="c-link nav-link" to="/c">C++</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="html-link nav-link" to="/htmlcss">HTML/CSS</NavLink></li>
                            <li className="project-li"><NavLink activeClassName="active" className="csharp-link nav-link" to="/csharp">C# Augmented Reality</NavLink></li>
                        </ul>
                        <div className="animated-dropdown-image-container">


                            <img className="dropdown-side-img animated" src = "http://i.imgur.com/lRq6T7n.gif" />

                                <img className="dropdown-bg-img" src = "https://media.giphy.com/media/A06UFEx8jxEwU/giphy.gif" />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}