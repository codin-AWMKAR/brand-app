import "./Platform.css";
import React from 'react';




const Platform = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=lMJXxhRFO1k'; 
  return (
    <div className="dabba">
    <div className="about">
      <div className="left">
      <div className="video-box-s2">
          <iframe
            title="YouTube Video"
            width="100%"
            height="100%"
            src={videoUrl.replace('watch?v=', 'embed/')}
            allowFullScreen
          ></iframe>
        </div>
        </div>
      
      <div className="right">
      <div className="wpb_wrapper">
          <h2 className="animated fadeInUp" data-animate="fadeInUp" data-delay=".2">
            Innovative platform for<br />
            the future.
          </h2>
          <p className="lead animated fadeInUp" data-animate="fadeInUp" data-delay=".3">
            In parallel with the constantly developing internet infrastructure and the development of digital devices, the way of education and habits are changing around the world.
          </p>
          <p>
            At this point, MYED is a project designed to take place in the changing and digitalizing world.
          </p>
          <p>
            <a className="btn btn-sm" href="https://myed.pro/">GO TO MYED WEBSITE</a>
          </p>
        </div>
        </div>
        
      </div>
      <div className="section-head text-center">
      <h1 className="section-title animated fadeInUp" data-animate="fadeInUp" data-delay=".1">
            <span>WHAT</span>
          </h1>
          </div>
          <h2> WHAT IS MYED?</h2>
          <div>
          <p className="animated fadeInUp" data-animate="fadeInUp" data-delay=".2">
          MYED is an online educational service platform, where educators, consultants, students and customer meet. MYED platform receives commissions from educators and consultants.
And from those commissions, we receive MYED Tokens, from the stock market. And these MYED Tokens, are distributed among all the parties.
</p>
</div>
    </div>
  );
};

export default Platform;
