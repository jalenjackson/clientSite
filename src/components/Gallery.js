import React from 'react'
import '../assets/stylesheets/gallery.css';
import Zoomy from 'react-zoomy';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'




export default class SimpleSlider extends React.Component{
    render() {
        return (
        <div className="gallery ">
            <ReactCSSTransitionGroup
                component="div"
                transitionName="route"
                transitionEnterTimeout={600}
                transitionAppearTimeout={600}
                transitionLeaveTimeout={400}
                transitionAppear={true}
            >
            <h2>Gallery</h2>
            <img className="img-examine" src={require("../assets/images/kemi1.jpg")} />
            <Zoomy
                imageUrl={require("../assets/images/kemi1.jpg")}
                renderThumbnail={({ showImage }) => <button className="examine-btn" onClick={showImage}>View In Full Screen</button>}
                scale={[1.1, 1.1]}
                imageProps={{
                    style: {
                        width: '100vw',
                        height: 'auto'
                    }
                }}
            />
            <img className="img-examine" src={require("../assets/images/kemi2.jpg")} />

            <Zoomy
                imageUrl={require("../assets/images/kemi2.jpg")}
                renderThumbnail={({ showImage }) => <button className="examine-btn" onClick={showImage}>View In Full Screen</button>}
                scale={[1.1, 1.1]}
                imageProps={{
                    style: {
                        width: '100vw',
                        height: 'auto'
                    }
                }}
            />
            <img className="img-examine" src={require("../assets/images/kemi3.jpg")} />

            <Zoomy
                imageUrl={require("../assets/images/kemi3.jpg")}
                renderThumbnail={({ showImage }) => <button className="examine-btn" onClick={showImage}>View In Full Screen</button>}
                scale={[1.1, 1.1]}
                imageProps={{
                    style: {
                        width: '100vw',
                        height: 'auto'
                    }
                }}
            />
            <img className="img-examine" src={require("../assets/images/kemi4.jpg")} />

            <Zoomy
                imageUrl={require("../assets/images/kemi4.jpg")}
                renderThumbnail={({ showImage }) => <button className="examine-btn" onClick={showImage}>View In Full Screen</button>}
                scale={[1.1, 1.1]}
                imageProps={{
                    style: {
                        width: '100vw',
                        height: 'auto'
                    }
                }}
            />

            </ReactCSSTransitionGroup>
        </div>

        )
    }
}

