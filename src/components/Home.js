import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import ReactSVG from 'react-svg'



export default class Home extends Component {
    render(){
        return (
            <div>

                <div className="pics">

                </div>

                <div className="top_level">
                    <img className="logo" src={require("../assets/images/logo.png")}/>
                </div>


                <div className="video">

                    <video className="img1" autoPlay={true} loop="true" muted="true">
                        <source src={require("../assets/images/kemi1.mp4")} type="video/mp4"/>
                    </video>
                    <video className="img2" autoPlay={true}  loop="true" muted="true">
                        <source src={require("../assets/images/kemi2.mp4")} type="video/mp4"/>
                    </video>
                    <video className="img3" autoPlay={true}  loop="true" muted="true">
                        <source src={require("../assets/images/kemi3.mp4")} type="video/mp4"/>
                    </video>
                </div>

                <div className="header_info">
                    <i className="fa fa-bars hamburger" aria-hidden="true" style={{fontSize: "50px", color: "white"}}/>
                <center>
                    <div className="social" style={{marginTop:"180px"}}>
                        <a href="https://www.youtube.com/channel/UCr5sI2_X_cvTV6WvOGDSwtQ">
                            <img src={require("../assets/images/YOUTUBE.png")} width="40px" height="40px" />
                        </a>

                        <a href="https://www.linkedin.com/in/atinuke-oyebade-ba60b239/">
                            <img src={require("../assets/images/LINKEDIN.png")} width="40px" height="40px"/>
                        </a>

                        <a href="http://www.imdb.com/name/nm4736944/?ref_=nv_sr_1">
                            <img src={require("../assets/images/IMDB.png")} width="40px" height="40px" />
                        </a>
                    </div>
                </center>
                        <img className="svg" style={{marginTop: "-300px"}} src={require("../assets/images/vagabond.svg")}/>
                    <p style={{transform:"translateY(-80px)"}} className="head">
                        <span style={{ color:"white", fontSize:"35px", fontWeight: "bold"}}>STUDIOS</span>
                    </p>
                    <p style={{transform:"translateY(20px)"}} className="head"><span style={{background:"black", color:"white"}}>Bringing edgy, funny, and unique animations to you!</span></p>
                    <p style={{transform:"translateY(80px)"}} className="head"><span style={{background:"black", color:"white"}}>"Know who you are</span></p>
                    <p style={{transform:"translateY(55px)"}} className="begin">
                        <span className="spacebar">Be</span>
                        <span className="spacebar1">Who You</span>
                        <span className="spacebar2">Are"</span>
                    </p>

                </div>
                <div className="space_press"></div>



                <div className="text">

                    <div className="copyright" >
                        <footer>
                            <h4 style={{bottom:"0px"}}>
                                <font size="1px">Copyright 2017-All Rights Reserved-Vagabond Rebel Art Studios</font>
                            </h4>
                        </footer>
                    </div>

<canvas className="canvas"></canvas>
                </div>
            </div>
        )
    }
}