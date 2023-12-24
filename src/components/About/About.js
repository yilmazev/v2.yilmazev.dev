import { Link } from "react-scroll";
import './About.scss';

const About = () => {

    return (
        <div id="about" className="section-about">
            <div className="about-container">
                <div className="title-group">
                    <h1 className="big-title">About</h1>
                    <h3 className="normal-title">Know Me More</h3>
                </div>
                <div className="about-content">
                    <div className="about-me">
                        <div className="about-column">
                            <h2 className="about-mini-title">Hello,</h2>
                            <h2 className="about-big-title">I'm <span className="about-big-colorful-title">Yilmaz Ev</span>.</h2>
                        </div>
                        <div className="about-column">
                            <p className="about-paragraph">My particular interest in web development started when I was 9 years old. Thanks to WordPress-like websites, I create and use simple CMSs, but over time I wanted to learn the necessary languages ​​to create websites. I learned HTML and CSS first.</p>
                            <br />
                            <p className="about-paragraph">Fast forward to today and now it has become something for me to earn money rather than a hobby. Since I started as a hobby in my childhood, I do this job for fun.</p>
                            <br />
                            <p className="about-paragraph">Here are a few technologies I've been working with lately:</p>
                            <ul className="about-skills">
                                <div className="about-skills-column">
                                    <li className="about-skills-item">HTML5</li>
                                    <li className="about-skills-item">CSS3</li>
                                    <li className="about-skills-item">Javascript</li>
                                </div>
                                <div className="about-skills-column">
                                    <li className="about-skills-item">React</li>
                                    <li className="about-skills-item">React Native</li>
                                    <li className="about-skills-item">Svelte</li>
                                </div>
                                <div className="about-skills-column">
                                    <li className="about-skills-item">SaSS</li>
                                    <li className="about-skills-item">Tailwind</li>
                                    <li className="about-skills-item">Bootstrap</li>
                                </div>
                            </ul>
                        </div>
                        <div className="about-column">
                            <div className="about-arrow-right-container">
                                <span className="about-arrow-title">Contact</span>
                                <svg viewBox="0 0 24 24" className="about-arrow-icon"><path d="M15.429 7.425 20 12l-4.571 4.572"></path><path d="M5.143 12H20"></path></svg>
                                <Link className="about-arrow-circle" to="contact" spy={true} smooth={true} offset={400} duration={300}></Link>
                            </div>
                        </div>
                    </div>
                    <ul className="about-my-informations">
                        <li className="about-my-informations-item">
                            <p className="about-my-informations-item-text">
                                <b className="about-my-informations-item-text-bold">Name:</b> Yilmaz Ev
                            </p>
                        </li>
                        <li className="about-my-informations-item">
                            <p className="about-my-informations-item-text">
                                <b className="about-my-informations-item-text-bold">Email:</b> <a href="mailto:ylmzofc@outlook.com" target={"_blank"} rel="noreferrer" className="about-my-informations-item-text-link">ylmzofc@outlook.com</a>
                            </p>
                        </li>
                        <li className="about-my-informations-item">
                            <p className="about-my-informations-item-text">
                                <b className="about-my-informations-item-text-bold">Age:</b> 18
                            </p>
                        </li>
                        <li className="about-my-informations-item">
                            <p className="about-my-informations-item-text">
                                <b className="about-my-informations-item-text-bold">From:</b> Istanbul, Turkey
                            </p>
                        </li>
                        <li className="about-my-informations-item">
                            <p className="about-my-informations-item-text">
                                <b className="about-my-informations-item-text-bold">Speak:</b> English & Turkish
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About