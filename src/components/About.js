import React from 'react'
import '../assets/stylesheets/about.css';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class About extends React.Component {
    render(){
        return (
            <div className="about-container">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="route"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                <div className="face-container ">


                        <img src={require("../assets/images/artist.png")}/>
                        <h2 className="parallax-scroll">Meet The Owner And Artist</h2>
                        <p className="parallax-scroll">ATINUKE "KEMI" OYEBADE</p>

                </div>

                    <div className="about-info">
                        <h2 className="parallax-scroll">About</h2>

                        <p>Vagabond Rebel Art Studios, est 2014, is a growing company that delivers numerous artistic services for personal, commercial and television use. Animation is the game here but illustrations, graphic designs, and logos are also welcomed! Vagabond Rebel Art Studios is dedicated to the creation of inspirational and surreal pieces to show versatility, motivation, creativity and the works regardless of the style or medium used.</p>

                        <p>Atinuke Kemi Oyebade, founder and owner of Vagabond Rebel Art Studios, is a first generation Nigerian-American born and raised in Georgia. Her love for art started from a young age with her father reading children's books and drawing pictures in them when there were none. This love for art manifested into a love for animation and other forms of art including motion graphics, illustrations, and design.</p>

                        <p>Obtaining a B.F.A in Arts and Science with emphasis in Animation from the University of Georgia in 2012, Kemi began her journey into freelancing and working with numerous individuals and companies. She also began her more personal works. Finally, in 2014, she created Vagabond Rebel Art Studios. Currently, she's obtaining her Masters at the Academy of Art University in 2D Traditional Animation and Visual Effects and lives in Atlanta, GA.</p>
                    </div>
                </ReactCSSTransitionGroup>
                </div>
        )
    }
}