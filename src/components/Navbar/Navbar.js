import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import './Navbar.scss';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 100 ) {
            setScrolled(true)
         }

        else {
            setScrolled(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    })

    let navbarClasses=['nav-fixed']

    if(scrolled) {
        navbarClasses.push('nav-scroll')
    }
  
    return (
        <>
            <nav id="navbar-default" className={navbarClasses.join(" ")}>
                <div className="navbar-container">
                    <div className="navbar-column">
                        <div className="navbar-logo-container">
                            <span className="navbar-logo-text">
                                Yilmaz<span className="navbar-logo-colorful-text">Ev</span>
                            </span>
                        </div>
                    </div>
                    <div className="navbar-column">
                        <ul className="navbar-nav">
                            <li index={"home"} className="nav-item">
                                <Link activeClass="active" className="nav-link" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                            </li>
                            <li index={"about"} className="nav-item">
                                <Link activeClass="active" className="nav-link" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
                            </li>
                            <li index={"services"} className="nav-item">
                                <Link activeClass="active" className="nav-link" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
                            </li>
                            <li index={"works"} className="nav-item">
                                <Link activeClass="active" className="nav-link" to="works" spy={true} smooth={true} offset={0} duration={500}>Works</Link>
                            </li>
                            <li index={"clients"} className="nav-item">
                                <Link activeClass="active" className="nav-link" to="clients" spy={true} smooth={true} offset={0} duration={500}>Clients</Link>
                            </li>
                            <li index={"contact"} className="nav-item">
                                <Link activeClass="active" className="nav-link" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav id="navbar-responsive">
                <div className="navbar-container">
                    <div className="navbar-column">
                        <div className="navbar-logo-container">
                            <span className="navbar-logo-text">
                                Yilmaz<span className="navbar-logo-colorful-text">Ev</span>
                            </span>
                        </div>
                    </div>
                    <div className="navbar-column">
                        <span onClick={ showSidebar } className="navbar-responsive-hamburger-container">
                            <svg className="navbar-responsive-hamburger-icon" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M13 18h7M4 6h16H4Zm0 6h16H4Z" /></svg>
                        </span>
                        <div className={"navbar-responsive-sidebar " + (sidebar ? 'show' : '')}>
                            <div className="navbar-responsive-overlay" onClick={ showSidebar } />
                            <ul className="navbar-responsive-sidebar-wrapper" onClick={ showSidebar }>
                                <div className="navbar-logo-container">
                                    <span className="navbar-logo-text">
                                        Yilmaz<span className="navbar-logo-colorful-text">Ev</span>
                                    </span>
                                </div>
                                <li index={"home"} className="navbar-responsive-item">
                                    <Link activeClass="active" className="navbar-responsive-link" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                                </li>
                                <li index={"about"} className="navbar-responsive-item">
                                    <Link activeClass="active" className="navbar-responsive-link" to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
                                </li>
                                <li index={"services"} className="navbar-responsive-item">
                                    <Link activeClass="active" className="navbar-responsive-link" to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
                                </li>
                                <li index={"works"} className="navbar-responsive-item">
                                    <Link activeClass="active" className="navbar-responsive-link" to="works" spy={true} smooth={true} offset={0} duration={500}>Works</Link>
                                </li>
                                <li index={"clients"} className="navbar-responsive-item">
                                    <Link activeClass="active" className="navbar-responsive-link" to="clients" spy={true} smooth={true} offset={0} duration={500}>Clients</Link>
                                </li>
                                <li index={"contact"} className="navbar-responsive-item">
                                    <Link activeClass="active" className="navbar-responsive-link" to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar