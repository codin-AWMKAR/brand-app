import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import "./ParticleComponent.css"; // Import the CSS file
import Tree from "../assets/10861-removebg-preview.png"

const ParticleComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    const particleOptions = {
        background: {
            color: {
                value: "#0d47a1",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        <div className="container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleOptions}
                className="particles"
            />
            
                <img
                    className="image"
                    src={Tree}
                    alt="MyED Logo"
                />
                <div className="firstText">
                <h1 className="animated fadeInUp" data-animate="fadeInUp">
                    New Generation Online Training and Consultancy
                </h1>
                <h3 className="listing-text">
                    MYED TOKEN IS LISTING. TODAY 20 MARCH 14:00 UTC
                </h3>
                <ul className="btns animated fadeInUp">
                <li className="btn-item">
                    <a className="btn" href="http://myed.pro/">GO TO MYED PLATFORM</a>
                </li>
                <li className="btn-item">
                    <a className="btn" href="https://play.google.com/store/apps/details?id=com.myed.education">MYED ANDROID APP</a>
                </li>
                <li className="btn-item">
                    <a className="btn" href="https://t.me/MyedOffical">TELEGRAM</a>
                </li>
            </ul>
            <h3 className="white-papers">White Papers</h3>
            <ul className="btns animated fadeInUp">
                <li><a className="btn btn-alt" href="https://myed-1.gitbook.io/myed-whitepaper-en-1/">WhitePaper English</a></li>
                <li><a className="btn btn-alt" href="https://myed-1.gitbook.io/myed-whitepaper-chinese/">WhitePaper 中国人</a></li>
                <li><a className="btn btn-alt" href="https://myed-1.gitbook.io/myed-whitepaper-tuerkce/">WhitePaper Turkish</a></li>
                <li><a className="btn btn-alt" href="https://myed-1.gitbook.io/myed-whitepaper-hindi/">WhitePaper Hindi</a></li>
            </ul>
            </div>
        </div>
    );
};

export default ParticleComponent;
