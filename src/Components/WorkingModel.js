import "./Platform.css";
import React from 'react';
import Lifecycle from "../assets/SeekPng.com_software-development-images-png_8703004.png"
import 'animate.css/animate.min.css';


const WorkingModel = () => {
    
  return (
    <div className="dabba">
      
    <div className="about">
      <div className="left">
      <div className="wpb_wrapper">
            <div className="vc_column_container vc_col-sm-12 vc_col-md-6 order-last order-lg-first">
                <div className="vc_column-inner">
                    <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element">
                            <div className="wpb_wrapper">
                                <div className="text-block animated fadeInUp" data-animate="fadeInUp" data-delay=".5">
                                  <div className="list animate__animated animate__fadeInUp">
                                    <ul className="white-list">
                                        <li className="animated fadeInUp" data-animate="fadeInUp" data-delay=".5">For example, when a student purchases an online course...</li>
                                        <li className="animated fadeInUp" data-animate="fadeInUp" data-delay=".6">Consultron website deducts 6 dollars worth of commission from this 30 USD worth of online training (20% commission).</li>
                                        <li className="animated fadeInUp" data-animate="fadeInUp" data-delay=".7">Consultron website buys Consultron tokens from the stock market with this commission. 80% of the Consultron Token purchased will be in the wallet of the student who takes the online course, 10% Consultron Token to the seller and 10% Consultron token to the platform itself.</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
      <div className="right">
      <img src={Lifecycle} alt="Bitphoto" className="lifecycle-image animate__animated animate__fadeInUp" />
        </div>
        
      </div>
  
    </div>
  );
};

export default WorkingModel;
