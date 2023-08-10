import "./Platform.css";
import React from 'react';
import 'animate.css/animate.min.css';


const Platform = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=lMJXxhRFO1k'; 
    return (
     
        <div className="dabba">
            <div className="about">
                <div className="left">
                    <div className="video-box-s2 animate__animated animate__fadeInUp">
                        <iframe
                            title="YouTube Video"
                            width="400px"
                            height="300px"
                            src={videoUrl.replace('watch?v=', 'embed/')}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="right">
                  <div className="container">
                    <div className="wpb_wrapper animate__animated animate__fadeInUp">
                        <h2 className="animated fadeInUp white-text" data-animate="fadeInUp" data-delay=".2">
                            Innovative platform for<br />
                            the future.
                        </h2>
                        <p className="lead animated fadeInUp" data-animate="fadeInUp" data-delay=".3">
                            In parallel with the constantly developing internet infrastructure and the development of digital devices, the way of education and habits are changing around the world.
                        </p>
                        <p>
                            At this point, Consultron is a project designed to take place in the changing and digitalizing world.
                        </p>
                    </div>
                </div>
                
                <div className="button ">
                    <a className="btn btn-sm " href="https://myed.pro/">GO TO Consultron WEBSITE</a>
                </div>
                </div>
            </div>
        </div>
        
    );
};

export default Platform;
