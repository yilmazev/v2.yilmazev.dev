import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Works from './Works/Works';
import Clients from './Clients/Clients';
import Contact from './Contact/Contact';

export default function MainView() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Works />
            <Clients />
            <Contact />
        </>
    )
}