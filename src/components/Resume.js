import React from 'react'
import '../assets/stylesheets/resume.css'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'


export default class Resume extends React.Component {
    render(){
        return (
            <div className="resume">
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="go"
                    transitionEnterTimeout={600}
                    transitionAppearTimeout={600}
                    transitionLeaveTimeout={400}
                    transitionAppear={true}
                >
                <h2 className="resume-h2 parallax-scroll">RESUME</h2>

                <h2 className="parallax-scroll">Work Experience</h2>

                <ul>

                    <li>Freelance Artist/Independant Studio Owner- Atlanta, GA-2014-Present</li>

                    <li>Collaborate with various clientele in order to produce visually appealing works from illustrations, graphic designs, animations, and films. Use of various mediums both traditional and digital to achieve desired effects.</li>

                    <li>Animator @ ARG! Cartoon Animation Studio- Colorado Springs,CO-2011-Present</li>

                    <li> Work closely with studio to create appealing and unique animations across all boards from ad commercials to tv productions. Long standing relationship with studio as Director, Animator, Character Designer, and Storyboard Artist</li>


                    <li> Animator for Hair Restore Advanced Video- Mariedent, Austrailia-2011</li>

                    <li> Animated five minute full-length educational commercial using Adobe Illustrator, Photoshop, After Effects, and Flash for layout, design, compositing and animating. Created and animated all elements in production.</li>
                </ul>

                <h2 className="parallax-scroll">Education</h2>


                <h2 className="parallax-scroll">2012-Present</h2>
                <ul>
                    <li>Academy of Art University-San Francisco, CA</li>
                    <li> M.F.A. in 2D Animation and VFX</li>
                   <li>3.25 GPA</li>
                </ul>


                <h2>2007-2012</h2>
                <ul>
                    <li>University of Georgia-Athens, GA</li>
                    <li>B.F.A. in Animation with emphasis in 2D Animation</li>
                    <li>3.67 GPA</li>
                </ul>

                <h2>Artistic Skills</h2>
                <ul>
                    <li>Traditional Drawing</li>
                    <li>Storyboarding</li>
                    <li>Illustration</li>
                    <li>Graphic Design</li>
                    <li>Digital Painting</li>
                    <li>Concept Dev.</li>
                    <li>Traditional Animation</li>
                    <li> 2D Digital Animation</li>
                    <li>Character Design</li>
                    <li>Tecniques</li>
                    <li>Pencil and Paper</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>Adobe Flash</li>
                    <li> Adobe After Effects</li>
                    <li> Toon Boom</li>
                    <li> TV Paint</li>
                </ul>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}