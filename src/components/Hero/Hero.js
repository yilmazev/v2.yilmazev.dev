import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js";
import './Hero.scss';

export default function Hero() {
    const typedTexts = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line
        const typed = new Typed(typedTexts.current, {
        strings: ["I'm a front-end developer.", "I keep up with the developing software world.", "I always use modern technologies.", "Shortcode, quality work."],
        startDelay: 0,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        smartBackspace: true
    })

    return () => {
        typedTexts.destroy();
    }
    }, [])

    return (
        <div id="home" className="section-hero">
            <div className="hero-content">
                <div className="hero-title">
                    <h2 className="hero-title-text">Do you need a web page?</h2>
                    <div className="hero-typed-container">
                        <h2 className="hero-title-text" ref={ typedTexts } > </h2>
                    </div>
                    <div className="hero-arrow-bottom-container">
                        <svg viewBox="0 0 24 24" className="hero-arrow-icon"><path d="M7.429 15.427 12 20l4.571-4.573"></path><path d="M12 20V5.143"></path></svg>
                        <Link className="hero-arrow-circle" to="about" spy={true} smooth={true} offset={0} duration={300}></Link>
                    </div>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="hero-bottom-content">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="hero-wave-image"><defs><linearGradient id="back-gradient"><stop offset="24%" stop-color="#4d5093" /><stop offset="64%" stop-color="#c98db0" /><stop offset="100%" stop-color="#db9b8f" /></linearGradient></defs><path fill="url(#back-gradient)" d="M0,256L48,250.7C96,245,192,235,288,218.7C384,203,480,181,576,197.3C672,213,768,267,864,282.7C960,299,1056,277,1152,266.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="hero-wave-image"><path fill="url(#back-gradient)" d="M0,128L80,117.3C160,107,320,85,480,101.3C640,117,800,171,960,197.3C1120,224,1280,224,1360,224L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
            </div>
        </div>
    )
}